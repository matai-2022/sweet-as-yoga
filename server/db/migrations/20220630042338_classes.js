exports.up = function (knex) {
  return knex.schema.createTable('classes', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.string('dateTime')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('classes')
}
