/**
 * Knex/pg connection for DATABASE_URL.
 * Local Postgres speaks plain TCP. The hosted database requires TLS, and its
 * certificate is not in Node's trust store, so remote URLs skip verification.
 */
export function postgresConnection(connectionString: string) {
  const local = /@(localhost|127\.0\.0\.1)(:|\/)/i.test(connectionString);

  if (local) {
    return connectionString;
  }

  return {
    connectionString,
    ssl: { rejectUnauthorized: false },
  };
}
