import * as path from 'path';
import { registerAs } from '@nestjs/config';

const databaseUrl = () => process.env.DATABASE_URL?.trim() || '';

export default registerAs('tenantDatabase', () => {
  const shared = {
    dbNamePrefix: process.env.TENANT_DB_NAME_PERFIX || 'bigcapital_tenant_',
    migrationsDir: path.join(__dirname, '../../database/tenant/migrations'),
    seedsDir: path.join(__dirname, '../../database/tenant/seeds/core'),
  };

  if (databaseUrl()) {
    return {
      client: 'pg',
      connection: databaseUrl(),
      ...shared,
    };
  }

  return {
    client: 'mysql',
    host: process.env.TENANT_DB_HOST || process.env.DB_HOST,
    port: process.env.TENANT_DB_PORT || process.env.DB_PORT || 3306,
    user: process.env.TENANT_DB_USER || process.env.DB_USER,
    password: process.env.TENANT_DB_PASSWORD || process.env.DB_PASSWORD,
    ...shared,
  };
});
