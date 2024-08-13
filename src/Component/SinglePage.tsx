import React from 'react'
import { NavBar } from './NavBar'
import { Hero } from './Hero'
import { Award } from './Award'
import { Information } from './Information'
import { AboutUs } from './AboutUs'
import { AboutKora } from './AboutKora'
import { Footer } from './Footer'
import MultiStepForm from './MultiStepForm'

export const SinglePage = () => {
  return (
    <div className='flex gap-[1vw] flex-col'>
        <Hero/>
        <Award/>
        <Information/>
        <MultiStepForm/>
        {/* <AboutKora/> */}
        <Footer/>
        
    </div>
  )
}
