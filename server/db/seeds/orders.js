exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('orders').del()
  //await knex('orders').insert([{ id: 1 }])
}
