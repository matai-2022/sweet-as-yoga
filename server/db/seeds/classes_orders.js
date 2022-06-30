exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('classes_orders').del()
  //await knex('classes_orders').insert([{ id: 1, orders_id: 1, classes_id: 1 }])
}
