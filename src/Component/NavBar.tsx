import React from 'react'
import { Link } from 'react-scroll'
import "../Styles/Fonts.css"
export const NavBar = () => {
  return (
    <div className='w-full mx-auto pt-[2rem] flex items-center justify-between'>
        <div>
          <img src="/assets/Images/kora 1.svg" alt="" width="107px" height="40px"/>
        </div>
        <div className='flex header gap-[3vw] pt-[0.7vw] text-[1.5vw] text-[#F7F8FC] text-opacity-[0.8] font-light hero_navbar'>
          <div className='italic text-white opacity-1'>
            <Link to="hero"    activeClass="active" className='cursor-pointer' spy={true} offset={0} smooth={true} duration={500}>Home</Link>
          </div>
          <div className='cursor-pointer'>
            <Link to="award"  className='cursor-pointer'  activeClass="active" spy={true} offset={0} smooth={true} duration={500}>Awards</Link>
          </div>
          <div>
            <Link to="info"  className='cursor-pointer'  activeClass="active" spy={true} offset={0} smooth={true} duration={500}>Information</Link>
          </div>
          <div>
            <Link to="about" className='cursor-pointer'  activeClass="active" spy={true} offset={0} smooth={true} duration={500}>About Us</Link>
          </div>
        </div>
        <div></div>
    </div>
  )
}
