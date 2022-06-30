import React from 'react'

export default function Classes() {
  return (
    <div className="classes">
      <table className="classes-table">
        <thead>
          <th>Date</th>
          <th>Time</th>
          <th>Name</th>
          <th>Description</th>
          <th></th>
        </thead>
        <tr>
          <td>11/02/2022</td>
          <td>6:30pm</td>
          <td>Sleepy As</td>
          <td>Relaxing yin yoga</td>
          <td>Book</td>
        </tr>
        <tr>
          <td>11/02/2022</td>
          <td>6:30am</td>
          <td>Sweaty As</td>
          <td>Work up a sweat</td>
          <td>Book</td>
        </tr>
      </table>
    </div>
  )
}
