import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {postOrder} from '../api'
import { useSelector, useDispatch } from 'react-redux'

import moment from 'moment'
import { deleteCart, emptyCart } from '../slices/cart'
import { addLatestOrder } from '../slices/latestOrder'
//import { addLatestOrder } from '../slices/latestOrder'

export default function Cart() {
  //const [order,setOrder] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const order = useSelector((state) => state.cart)
  

  //useEffect(async () => {}, [])

  function handleDelete(e, id) {
    dispatch(deleteCart({ id: id }))
  }

  async function handleSubmit(e,order){
    e.preventDefault()
    const id = await postOrder(order)
    dispatch(emptyCart())
    dispatch(addLatestOrder(id))
    navigate('/confirmation')
  }

  return (
    <div className="cart">
      <table className="cart-table">
        <thead>
          <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Name</th>
          <th></th>
          </tr>
        </thead>
        {order.map((item) => {
          return (
            <tr key={item.id}>
              <td>{moment(item.dateTime).format('dddd D MMMM YYYY')}</td>
              <td>{moment(item.dateTime).format('LT')}</td>
              <td>{item.name}</td>
              <td><button onClick={(e) => handleDelete(e, item.id)}>Remove</button></td>
            </tr>
          )
        })}
      </table>

      <button onClick={(e)=> handleSubmit(e, order)}>Submit</button>
    </div>
  )
}
