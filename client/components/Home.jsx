import React, { useEffect, useState } from 'react'
import { getAffirmation } from '../api'

export default function Home() {
  const [affirmation, setAffirmation] = useState('')

  useEffect(async () => {
    const temp = await getAffirmation()
    setAffirmation(temp)
  }, [])

  console.log(affirmation)
  return (
    <div className="home">
      <div className="landing-image">{affirmation}</div>
      <div className="home-description">
        This little oasis tucked in amongst the hustle and bustle of Newmarket
        is a place to relax, find your inner peace, get energised and feel
        balanced. Sweet As Yoga is a welcoming studio for people at all stages
        of their yoga journey, whether it is your first class or you have been
        practising for years. They also have regular workshops and special
        events on the calendar where you can get a more in-depth practice, or
        learn new skills from the best of the best.
      </div>
    </div>
  )
}
