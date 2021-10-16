exports.up = function (knex, Promise) {
    return knex.schema.createTable('stadistics', function (table) {
        table.increments();
        table.integer('id_obj')
        table.string('name_obj')
        table.double('ranking')
        table.integer('num_view')
        table.integer('num_download')
        table.string('autor')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('stadistics');
};