exports.up = function (knex) {
  if (knex.client.config.client === 'pg') {
    return knex.raw(`
      INSERT INTO "USER_TENANTS" ("USER_ID", "TENANT_ID", "ROLE", "CREATED_AT", "UPDATED_AT")
      SELECT "ID", "TENANT_ID", 'owner', "CREATED_AT", "UPDATED_AT"
      FROM "USERS"
      WHERE "TENANT_ID" IS NOT NULL
        AND NOT EXISTS (
          SELECT 1 FROM "USER_TENANTS" ut
          WHERE ut."USER_ID" = "USERS"."ID" AND ut."TENANT_ID" = "USERS"."TENANT_ID"
        )
    `);
  }

  return knex.raw(`
    INSERT IGNORE INTO USER_TENANTS (USER_ID, TENANT_ID, ROLE, CREATED_AT, UPDATED_AT)
    SELECT ID, TENANT_ID, 'owner', CREATED_AT, UPDATED_AT
    FROM   USERS
    WHERE  TENANT_ID IS NOT NULL
  `);
};

exports.down = function () {
  // Cannot safely reverse a backfill.
  return Promise.resolve();
};
