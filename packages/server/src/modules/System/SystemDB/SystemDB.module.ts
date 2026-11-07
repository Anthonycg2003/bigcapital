import Knex from 'knex';
import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DATE_ONLY_COLUMNS_OPTIONS } from '@/common/constants/database.constants';
import {
  SystemKnexConnection,
  SystemKnexConnectionConfigure,
} from './SystemDB.constants';
import { knexSnakeCaseMappers } from 'objection';
import { SystemDatabaseController } from './SystemDB.controller';

const providers = [
  {
    provide: SystemKnexConnectionConfigure,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const client = configService.get('systemDatabase.client');
      const connection =
        client === 'pg'
          ? configService.get('systemDatabase.connection')
          : {
              host: configService.get('systemDatabase.host'),
              port: configService.get('systemDatabase.port'),
              user: configService.get('systemDatabase.user'),
              password: configService.get('systemDatabase.password'),
              database: configService.get('systemDatabase.databaseName'),
              charset: 'utf8',
              ...DATE_ONLY_COLUMNS_OPTIONS,
            };

      return {
        client,
        connection,
        migrations: {
          directory: configService.get('systemDatabase.migrationDir'),
          loadExtensions: ['.js'],
        },
        seeds: {
          directory: configService.get('systemDatabase.seedsDir'),
        },
        pool: { min: 0, max: 7 },
        ...knexSnakeCaseMappers({ upperCase: true }),
      };
    },
  },
  {
    provide: SystemKnexConnection,
    inject: [SystemKnexConnectionConfigure],
    useFactory: async (knexConfig) => {
      const knex = Knex(knexConfig);
      if (knexConfig.client === 'pg') {
        await knex.migrate.latest();
      }
      return knex;
    },
  },
];

@Global()
@Module({
  controllers: [SystemDatabaseController],
  providers: [...providers],
  exports: [...providers],
})
export class SystemDatabaseModule {}
