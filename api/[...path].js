const crypto = require('crypto');
const path = require('path');

const serverDist = path.join(__dirname, '../packages/server/dist');

function postgresSsl(connectionString) {
  const local = /@(localhost|127\.0\.0\.1)(:|\/)/i.test(connectionString);
  return local ? undefined : { rejectUnauthorized: false };
}

/**
 * One signing key for every instance. The server creates it on first boot and
 * keeps it in Postgres, so a redeploy does not invalidate sessions.
 */
async function ensureJwtSecret() {
  if (process.env.APP_JWT_SECRET) {
    return;
  }

  const connectionString = process.env.DATABASE_URL?.trim();
  if (!connectionString) {
    process.env.APP_JWT_SECRET = crypto.randomBytes(32).toString('hex');
    return;
  }

  const { Client } = require(require.resolve('pg', {
    paths: [path.join(__dirname, '../packages/server')],
  }));
  const client = new Client({
    connectionString,
    ssl: postgresSsl(connectionString),
  });

  await client.connect();
  try {
    await client.query(
      `CREATE TABLE IF NOT EXISTS app_runtime_secrets (
        name text PRIMARY KEY,
        value text NOT NULL
      )`,
    );
    await client.query(
      `INSERT INTO app_runtime_secrets (name, value)
       VALUES ('jwt', $1)
       ON CONFLICT (name) DO NOTHING`,
      [crypto.randomBytes(32).toString('hex')],
    );
    const stored = await client.query(
      `SELECT value FROM app_runtime_secrets WHERE name = 'jwt'`,
    );
    process.env.APP_JWT_SECRET = stored.rows[0].value;
  } finally {
    await client.end();
  }
}

let expressApp;

async function getApp() {
  if (!expressApp) {
    await ensureJwtSecret();
    process.env.SYSTEM_DB_MIGRATION_DIR =
      process.env.SYSTEM_DB_MIGRATION_DIR ||
      path.join(serverDist, 'database/system/migrations');
    process.env.SYSTEM_DB_SEEDS_DIR =
      process.env.SYSTEM_DB_SEEDS_DIR ||
      path.join(serverDist, 'database/system/seeds');
    process.env.TENANT_DB_MIGRATION_DIR =
      process.env.TENANT_DB_MIGRATION_DIR ||
      path.join(serverDist, 'database/tenant/migrations');
    process.env.TENANT_DB_SEEDS_DIR =
      process.env.TENANT_DB_SEEDS_DIR ||
      path.join(serverDist, 'database/tenant/seeds/core');

    // Static require so the hosted file tracer includes the server and its dependencies.
    const { createApp } = require('../packages/server/dist/main.js');
    const nestApp = await createApp();
    expressApp = nestApp.getHttpAdapter().getInstance();
  }

  return expressApp;
}

module.exports = async (req, res) => {
  try {
    const app = await getApp();
    const url = req.url || '/';

    if (!url.startsWith('/api')) {
      const suffix = url.startsWith('/') ? url : `/${url}`;
      req.url = `/api${suffix}`;
    }

    return app(req, res);
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader('content-type', 'application/json');
      res.end(
        JSON.stringify({
          statusCode: 500,
          message: 'Internal server error',
        }),
      );
    }
  }
};

module.exports.ensureJwtSecret = ensureJwtSecret;
