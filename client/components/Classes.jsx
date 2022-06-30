import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { fetchClasses } from '../api.js'

export default function Classes() {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    return fetchClasses()
      .then((data) => {
        setClasses(data)
      })
      .catch((error) => {
        console.error(error.message)
      })
  }, [])

  return (
    <div className="classes">
      <table className="classes-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Name</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {classes.map((item) => {
            return (
              <tr key={item.id}>
                <td>{moment(item.dateTime).format('dddd D MMMM YYYY')}</td>
                <td>{moment(item.dateTime).format('LT')}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>Book</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
