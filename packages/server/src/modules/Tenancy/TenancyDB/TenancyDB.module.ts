import knex from 'knex';
import * as LRUCache from 'lru-cache';
import { Global, Module } from '@nestjs/common';
import { knexSnakeCaseMappers } from 'objection';
import { ClsModule, ClsService } from 'nestjs-cls';
import { ConfigService } from '@nestjs/config';
import { DATE_ONLY_COLUMNS_OPTIONS } from '@/common/constants/database.constants';
import { TENANCY_DB_CONNECTION } from './TenancyDB.constants';
import { UnitOfWork } from './UnitOfWork.service';

const lruCache = new LRUCache();

export const TenancyDatabaseProxyProvider = ClsModule.forFeatureAsync({
  provide: TENANCY_DB_CONNECTION,
  global: true,
  strict: true,
  inject: [ConfigService, ClsService],
  useFactory: async (configService: ConfigService, cls: ClsService) => () => {
    const organizationId = cls.get('organizationId');
    const database =
      `${configService.get('tenantDatabase.dbNamePrefix')}${organizationId}`
        .replace(/[^a-zA-Z0-9_]/g, '')
        .toUpperCase();
    const cachedInstance = lruCache.get(database);

    if (cachedInstance) {
      return cachedInstance;
    }
    const client = configService.get('tenantDatabase.client');
    const knexInstance = knex({
      client,
      connection:
        client === 'pg'
          ? configService.get('tenantDatabase.connection')
          : {
              host: configService.get('tenantDatabase.host'),
              port: configService.get('tenantDatabase.port'),
              user: configService.get('tenantDatabase.user'),
              password: configService.get('tenantDatabase.password'),
              database,
              charset: 'utf8',
              ...DATE_ONLY_COLUMNS_OPTIONS,
            },
      ...(client === 'pg' ? { searchPath: [database] } : {}),
      migrations: {
        directory: configService.get('tenantDatabase.migrationsDir'),
        loadExtensions: ['.js'],
      },
      seeds: {
        directory: configService.get('tenantDatabase.seedsDir'),
      },
      pool: {
        min: 0,
        max: 7,
        ...(client === 'pg'
          ? {
              afterCreate: (conn, done) => {
                conn.query(`SET search_path TO "${database}"`, (err) =>
                  done(err, conn),
                );
              },
            }
          : {}),
      },
      ...knexSnakeCaseMappers({ upperCase: true }),
    });
    lruCache.set(database, knexInstance);

    return knexInstance;
  },
  type: 'function',
});

@Global()
@Module({
  imports: [TenancyDatabaseProxyProvider],
  providers: [UnitOfWork],
  exports: [UnitOfWork],
})
export class TenancyDatabaseModule {}
