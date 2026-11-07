exports.up = function (knex) {
  return knex.schema
    .createTable('view_roles', (table) => {
      table.increments();
      table.integer('index');
      table.string('field_key').index();
      table.string('comparator');
      table.string('value');
      table
        .integer('view_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('views');
    })
    .then(() =>
      require('../sequence').restartIdentity(knex, 'VIEW_ROLES', 1000),
    );
};

exports.down = (knex) => knex.schema.dropTableIfExists('view_roles');
