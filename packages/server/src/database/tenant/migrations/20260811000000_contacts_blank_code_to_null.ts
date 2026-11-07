exports.up = function (knex) {
  if (knex.client.config.client === 'pg') {
    return knex.raw(`UPDATE "CONTACTS" SET "CODE" = NULL WHERE "CODE" = ''`);
  }

  return knex.raw("UPDATE `CONTACTS` SET `code` = NULL WHERE `code` = ''");
};

exports.down = function (_knex) {
  return Promise.resolve();
};
