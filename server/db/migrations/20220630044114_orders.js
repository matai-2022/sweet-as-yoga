exports.up = function (knex) {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id').primary()
    table.date('created_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('orders')
}
