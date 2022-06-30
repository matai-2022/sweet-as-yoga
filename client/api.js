import request from 'superagent'

const url = '/api/v1/'

export function fetchClasses() {
  return request.get(url + '/classes').then((res) => res.body)
}

export function fetchOrders() {
  return request.get(url + '/orders').then((res) => res.body)
}

export function postOrder(order) {
  return request
    .post(url + '/orders')
    .send(order)
    .then((res) => res.body)
    .catch((err) => {
      console.error(err)
    })
}
