exports.up = function (knex) {
  return knex.schema
    .createTable('view_has_columns', (table) => {
      table.increments();
      table
        .integer('view_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('views');
      table.string('field_key');
      table.integer('index').unsigned();
    })
    .then(() =>
      require('../sequence').restartIdentity(knex, 'ITEMS_CATEGORIES', 1000),
    );
};

exports.down = (knex) => knex.schema.dropTableIfExists('view_has_columns');
