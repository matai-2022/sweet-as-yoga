exports.up = function (knex) {
  return knex.schema.createTable('classes_orders', (table) => {
    table.increments('id').primary()
    table.integer('orders_id').references('orders.id')
    table.integer('classes_id').references('classes.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('classes_orders')
}
