import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './Home.jsx'
import Cart from './Cart.jsx'
import Classes from './Classes.jsx'
import Confirmation from './Confirmation.jsx'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/cart">Cart</Link>
      </nav>

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
