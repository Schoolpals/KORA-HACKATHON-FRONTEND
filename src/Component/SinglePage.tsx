import React from 'react'
import { NavBar } from './NavBar'
import { Hero } from './Hero'
import { Award } from './Award'
import { Information } from './Information'
import { AboutKora } from './AboutKora'
import MultiStepForm from './MultiStepForm'
import { Form } from './Form'
import { Footer } from './Footer'
import { Sponsors } from './Sponsors'
import { Judges } from './Judges'

export const SinglePage = () => {
  return (
    <div className='flex gap-[1vw] flex-col'>
        <Hero/>
        <Sponsors/>
        <Information/>
        <MultiStepForm/>
        <Award/>

        <Judges/>
        <Form/>
        <Footer/>
        
    </div>
  )
}
