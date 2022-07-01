import React, { useState, useEffect } from 'react'

import { fetchClasses } from '../api.js'

import Class from './Class.jsx'

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
          {classes.map((item) => (
            <Class
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              dateTime={item.dateTime}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
