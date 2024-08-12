import React from 'react'
import { NavBar } from './NavBar'
import { Hero } from './Hero'
import { Award } from './Award'
import { Information } from './Information'
import { AboutUs } from './AboutUs'

export const SinglePage = () => {
  return (
    <div>
        <Hero/>
        <Award/>
        <Information/>
        <AboutUs/>
    </div>
  )
}
