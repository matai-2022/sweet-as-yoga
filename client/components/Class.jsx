import React from 'react'
import moment from 'moment'

import { useDispatch } from 'react-redux'

import { addClass } from '../slices/cart.js'

export default function Class({ id, name, description, dateTime }) {
  const dispatch = useDispatch()

  function handleClick(event) {
    event.preventDefault()

    dispatch(addClass({ id, name, dateTime }))
  }

  return (
    <tr key={id}>
      <td>{moment(dateTime).format('dddd D MMMM YYYY')}</td>
      <td>{moment(dateTime).format('LT')}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <button onClick={handleClick}>Book</button>
      </td>
    </tr>
  )
}
