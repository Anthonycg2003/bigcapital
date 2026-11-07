/**
 * Starts the next inserted id at `value`.
 * MySQL uses AUTO_INCREMENT. Postgres uses the serial sequence.
 */
exports.restartIdentity = function restartIdentity(knex, table, value) {
  if (knex.client.config.client === 'pg') {
    return knex.raw(
      `SELECT setval(pg_get_serial_sequence('"${table}"', 'ID'), ?, false)`,
      [value],
    );
  }

  return knex.raw(`ALTER TABLE \`${table}\` AUTO_INCREMENT = ${Number(value)}`);
};
