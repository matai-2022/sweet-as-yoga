import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home.jsx'
import Cart from './Cart.jsx'
import Classes from './Classes.jsx'
import Confirmation from './Confirmation.jsx'
import Nav from './Nav.jsx'

function App() {

  return (
    <>
      <div className="header">
        <h1>Sweet As Yoga</h1>
        <Nav/>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  )
}

export default App
