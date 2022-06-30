import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './Home.jsx'
import Cart from './Cart.jsx'
import Classes from './Classes.jsx'
import Confirmation from './Confirmation.jsx'

function App() {
  return (
    <>
      <div className="header">
        <h1>Sweet As Yoga</h1>

        <nav>
          <Link to="/">HOME</Link>
          <Link to="/classes">CLASSES</Link>
          <Link to="/cart">CART</Link>
        </nav>
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
