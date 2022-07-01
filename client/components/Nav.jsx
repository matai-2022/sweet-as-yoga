import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Nav() {
  const cartCount = useSelector((state) => state.cart.length)
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/classes">CLASSES</Link>
      <Link to="/cart">CART ({cartCount})</Link>
    </nav>
  )
}
