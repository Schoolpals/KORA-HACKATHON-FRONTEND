import React from 'react'
import { NavBar } from './NavBar'
import { Hero } from './Hero'
import { Award } from './Award'
import { Information } from './Information'
import { AboutUs } from './AboutUs'
import { AboutKora } from './AboutKora'
import MultiStepForm from './MultiStepForm'
import { Form } from './Form'
import { Footer } from './Footer'

export const SinglePage = () => {
  return (
    <div className='flex gap-[1vw] flex-col'>
        <Hero/>
        <Award/>
        <Information/>
        <MultiStepForm/>
        {/* <AboutKora/> */}
        <Form/>
        <Footer/>
        
    </div>
  )
}
