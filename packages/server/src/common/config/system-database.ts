import * as path from 'path';
import { registerAs } from '@nestjs/config';
import { postgresConnection } from './postgres-connection';

const databaseUrl = () => process.env.DATABASE_URL?.trim() || '';

export default registerAs('systemDatabase', () => {
  const migrationDir =
    process.env.SYSTEM_DB_MIGRATION_DIR ||
    path.join(__dirname, '../../database/system/migrations');
  const seedsDir =
    process.env.SYSTEM_DB_SEEDS_DIR ||
    path.join(__dirname, '../../database/system/seeds');

  if (databaseUrl()) {
    return {
      client: 'pg',
      connection: postgresConnection(databaseUrl()),
      migrationDir,
      seedsDir,
    };
  }

  return {
    client: 'mysql',
    host: process.env.SYSTEM_DB_HOST || process.env.DB_HOST,
    port: process.env.SYSTEM_DB_PORT || process.env.DB_PORT || 3306,
    user: process.env.SYSTEM_DB_USER || process.env.DB_USER,
    password: process.env.SYSTEM_DB_PASSWORD || process.env.DB_PASSWORD,
    databaseName: process.env.SYSTEM_DB_NAME || process.env.DB_NAME,
    migrationDir,
    seedsDir,
  };
});
