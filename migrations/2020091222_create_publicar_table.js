exports.up = function(knex, Promise) {
    return knex.schema.createTable('publicar', function(table) {
        table.increments();
        table.string('idobj')
        table.string('revisor')
        table.string('observacion')
        table.string('estado')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('publicar');
};