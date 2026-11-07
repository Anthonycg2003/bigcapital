exports.up = (knex) => {
  const renames = [
    ['SHIPPING_ADDRESS_1', 'SHIPPING_ADDRESS1'],
    ['SHIPPING_ADDRESS_2', 'SHIPPING_ADDRESS2'],
    ['BILLING_ADDRESS_1', 'BILLING_ADDRESS1'],
    ['BILLING_ADDRESS_2', 'BILLING_ADDRESS2'],
  ];

  if (knex.client.config.client === 'pg') {
    return renames.reduce(
      (chain, [from, to]) =>
        chain.raw(`ALTER TABLE "CONTACTS" RENAME COLUMN "${from}" TO "${to}"`),
      knex.schema,
    );
  }

  return renames.reduce(
    (chain, [from, to]) =>
      chain.raw(`ALTER TABLE CONTACTS CHANGE ${from} ${to} VARCHAR(255)`),
    knex.schema,
  );
};

exports.down = (knex) => {
  return knex.schema.table('contacts', (_table) => {});
};
