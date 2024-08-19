
import "../Styles/Fonts.css"
import { NavBar } from './NavBar';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Hero = () => {
  const navigate = useNavigate()
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);
  return (
    <div className='  overflow-hidden w-full text-white Hero'>
      <div className='w-[87%] mx-auto'>
        <NavBar />
        <hr className='opacity-20 w-full  xl:hidden mt-2' />
        <div className='md:flex xl:h-full gap-[3vw] relative  xl:justify-center '>
          <div data-aos="slide-right" className='xl:h-[42.5vw] gap-[2vw]  w-[82%] xl:pt-0 items-start  md:h-[70vw] h-[54vh]   justify-center flex flex-col hero_text '>
            <div className='font-bold  gap-[2vw]  text-[11.4vw] md:text-[8vw] flex flex-col text_lead  xl:text-[5.5vw] md:leading-[8vw] leading-[12vw] xl:leading-[3.5rem] hero_text2'>
              <span className="fakwa">Kora</span>
              <span className='bg-gradient-to-l from-[#61ADE8] to-[#92A2E0] bg-clip-text text-transparent'>Hackathon 1.0</span>
            </div>
            <div className='flex flex-col xl:gap-[2vw] items-start md:gap-[0vw] xl:h-[11.5vw]  '>
              <div className='xl:max-w-[82%] xl:text-left text-white  relative z-50  hero_docs xl:leading-[1.5rem] font-light md:text-[2.4vw] text-[4vw] xl:text-[20px] text-opacity-70 '>
                Join our 39-day fintech hackathon to unlock your potential and explore new market opportunities.
              </div>
              <Link to="form" className='cursor-pointer relative xl:top-0 md:-top-[4vw] ' activeClass="active" spy={true} offset={0} smooth={true} duration={500}>
                <button className='xl:w-[191px] hero_button w-[33vw] text-[4vw] md:rounded-[7px] rounded-[4px]   md:w-[27vw] xl:text-[1.4vw] md:text-[3vw] xl:rounded-[7px] h-[10vw] xl:h-[48px] md:h-[8vw]  bg-[#2961ED]' >
                  Register Now
                </button>
              </Link>

            </div>
          </div>
          <div data-aos="slide-left" className=" xl:top-[2vw] md:top-[26vw]   relative phone_image ">
            <img loading="lazy" src="/assets/Images/herophoto.png" alt="" className="xl:w-[340px] w-[23vh] -right-6  absolute -top-[41vw] md:top-0  md:relative md:w-[44vw] h-[42vh] xl:h-[580px] md:h-[60vw] " />
          </div>
          {/* <div>
            <Register />
          </div> */}
        </div>
      </div>
    </div>
  )
}
