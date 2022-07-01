import React, { useEffect } from 'react'
//import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import { deleteCart } from '../slices/cart'

export default function Cart() {
  //const [order,setOrder] = useState([])
  const dispatch = useDispatch()
  const order = useSelector((state) => state.cart)
  console.log('order', order)

  useEffect(async () => {}, [])

  function handleDelete(e, id) {
    dispatch(deleteCart({ id: id }))
  }

  return (
    <div className="cart">
      <table className="cart-table">
        <thead>
          <th>Date</th>
          <th>Time</th>
          <th>Name</th>
          <th></th>
        </thead>
        {order.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.dateTime}</td>
              <td>{item.dateTime}</td>
              <td>{item.name}</td>
              <button onClick={(e) => handleDelete(e, item.id)}>Remove</button>
            </tr>
          )
        })}
      </table>

      <button>Submit</button>
    </div>
  )
}
