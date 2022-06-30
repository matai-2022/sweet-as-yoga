const connection = require('./connection')

module.exports = {
  listClasses,
  listOrders,
  addClass,
}

function listClasses(db = connection) {
  return db('classes').select()
}

//requests is [1,2,3]
function addClass(requests, db = connection) {
  return db('orders').insert()
}

function listOrders(db = connection) {
  return db('classes_orders')
    .join('classes', 'classes_orders.classes_id', 'classes.id')
    .join('orders', 'classes_orders.orders_id', 'orders.id')
    .select(
      'orders.id as orderId',
      'classes.name as className',
      'classes.description as classDes',
      'classes.dateTime as classTime'
    )
}
