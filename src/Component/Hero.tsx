import React from 'react'
import "../Styles/Fonts.css"
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { NavBar } from './NavBar';
import { useNavigate } from 'react-router';
import { Register } from './Register';

export const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-[#060D17]  xl:h-[54dvw] md:h-[110dvw] h-[90dvh] overflow-hidden w-full text-white Hero'>
      <div className='w-[87%] mx-auto'>
        <NavBar />
        <hr className='opacity-20 w-full xl:hidden mt-2'/>
        <div className=''>
          <div className='xl:h-[47.5vw] gap-[2vw] w-[86%] xl:pt-0  md:h-[80vw] h-[80vh]  justify-center flex flex-col hero_text '>
            <div className='font-bold  gap-[2vw] mtrd:gap-0  md:text-[12vw] flex flex-col  xl:text-[6vw] italic leading-[12vw] xl:leading-[5.8rem]'>
              <span>Kora</span>
              <span className='bg-gradient-to-r from-[#61ADE8] to-[#92A2E0] bg-clip-text text-transparent'>Hackathon 1.0</span>
            </div>
            <div className='flex flex-col gap-[2vw] xl:h-[11.5vw]  '>
              <div className='xl:max-w-[62%] xl:text-left   leading-[1.5rem] font-light md:text-[2.6vw] text-[4vw] xl:text-[20px] text-[#A1A6AD]'>
                Join our 39-day fintech hackathon to unlock your potential and explore new market opportunities.
              </div>
              {/* <button className='w-[191px] rounded-[7px] h-[48px] bg-[#2961ED]' onClick={() => navigate("Register")}>
                Register Now
              </button> */}
            </div>
          </div>
          {/* <div>
            <Register />
          </div> */}
        </div>
      </div>
    </div>
  )
}
