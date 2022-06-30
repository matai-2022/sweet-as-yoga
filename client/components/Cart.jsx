import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart() {
  return (
    <div className="cart">
      <table className="cart-table">
        <thead>
          <th>Date</th>
          <th>Time</th>
          <th>Name</th>
          <th></th>
        </thead>
        <tr>
          <td>11/02/2022</td>
          <td>6:30pm</td>
          <td>Sleepy As</td>
          <td>Remove</td>
        </tr>
        <tr>
          <td>11/02/2022</td>
          <td>6:30am</td>
          <td>Sweaty As</td>
          <td>Remove</td>
        </tr>
      </table>

      <button>Submit</button>
    </div>
  )
}
