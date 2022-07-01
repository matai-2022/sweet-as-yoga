import React, { useState, useEffect } from 'react'

import { fetchClasses } from '../api.js'

import Class from './Class.jsx'

const classList = ['Bendy As', 'Sweaty As', 'Sleepy As', 'Inverted As']

export default function Classes() {
  const [classes, setClasses] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    return fetchClasses()
      .then((data) => {
        setClasses(data)
        setFiltered(data)
      })
      .catch((error) => {
        console.error(error.message)
      })
  }, [])

  function handleInput(event) {
    if (event.target.value === 'all') {
      setFiltered(classes)
    } else {
      setFiltered(classes.filter((item) => item.name === event.target.value))
    }
  }

  return (
    <div className="classes">
      <table className="classes-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>
              <select onInput={handleInput}>
                <option value="all">All Classes</option>
                {classList.map((element) => {
                  return (
                    <option key={element} value={element}>
                      {element}
                    </option>
                  )
                })}
              </select>
            </th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
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
