import React from 'react'
import "../Styles/Fonts.css"
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { NavBar } from './NavBar';
import { useNavigate } from 'react-router';
import { Register } from './Register';

export const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-[#060D17] h-[56vw] w-full text-white Hero'>
      <div className='w-[88%] mx-auto'>
        <NavBar />
        <div className='flex items-center justify-center'>
          <div className='h-[47.5vw] gap-[2vw] w-[86%]  justify-center flex flex-col hero_text '>
            <div className='font-extrabold italic flex flex-col text-[6vw] leading-[5.8rem]'>
              <span>Kora</span>
              <span className='bg-gradient-to-r from-[#61ADE8] to-[#92A2E0] bg-clip-text text-transparent'>Hackathon 1.0</span>
            </div>
            <div className='flex flex-col gap-[2vw] h-[11.5vw] '>
              <div className='max-w-[80%] leading-[1.5rem] font-light text-[20px] text-[#A1A6AD]'>
                Join our 39-day fintech hackathon to unlock your potential and explore new market opportunities.
              </div>
              {/* <button className='w-[191px] rounded-[7px] h-[48px] bg-[#2961ED]' onClick={() => navigate("Register")}>
                Register Now
              </button> */}
            </div>
          </div>
          <div>
            <Register />
          </div>
        </div>
      </div>
    </div>
  )
}
