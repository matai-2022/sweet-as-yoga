const connection = require('./connection')

module.exports = {
  listClasses,
  listOrders,
  addClass,
}

function listClasses(db = connection) {
  return db('classes').select()
}

//requests [{id:1},{id:2}] ids here are classes ids
function addClass(requests, db = connection) {
  const order = requests.map((item) => {
    return { id: item.id }
  })
  const timestamp = new Date(Date.now())
  return db('orders')
    .insert({
      created_at: timestamp,
    })
    .then(([id]) => addOrderLines(id, order, db))
}

function addOrderLines(id, order, db = connection) {
  const orderLines = order.map((item) => {
    return {
      orders_id: id,
      classes_id: item.id,
    }
  })
  return db('classes_orders')
    .insert(orderLines)
    .then(() => null)
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
