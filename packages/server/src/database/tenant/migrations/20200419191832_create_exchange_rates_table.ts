exports.up = function (knex) {
  return knex.schema
    .createTable('exchange_rates', (table) => {
      table.increments();
      table.string('currency_code', 4).index();
      table.decimal('exchange_rate');
      table.date('date').index();
      table.timestamps();
    })
    .then(() =>
      require('../sequence').restartIdentity(knex, 'EXCHANGE_RATES', 1000),
    );
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('exchange_rates');
};
