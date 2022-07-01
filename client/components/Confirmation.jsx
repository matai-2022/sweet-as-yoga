import React from 'react'
import { useSelector } from 'react-redux'

export default function Confirmation() {

const latestOrder = useSelector((state)=> state.latestOrder)

  return <p>Thank you for booking! Your order number is #{latestOrder}</p>
}
