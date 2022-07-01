import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {postOrder} from '../api'
import { useSelector, useDispatch } from 'react-redux'

import moment from 'moment'
import { deleteCart } from '../slices/cart'

export default function Cart() {
  //const [order,setOrder] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const order = useSelector((state) => state.cart)
  

  //useEffect(async () => {}, [])

  function handleDelete(e, id) {
    dispatch(deleteCart({ id: id }))
  }

  function handleSubmit(e,order){
    e.preventDefault()
   postOrder(order)
   .then(navigate('/confirmation'))
   .catch((err)=>console.error(err.message))

    
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
              <button onClick={(e) => handleDelete(e, item.id)}>Remove</button>
            </tr>
          )
        })}
      </table>

      <button onClick={(e)=> handleSubmit(e, order)}>Submit</button>
    </div>
  )
}
