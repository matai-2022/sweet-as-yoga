exports.up = function (knex) {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id').primary()
    table.integer('classes_id').references('classes.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('orders')
}
