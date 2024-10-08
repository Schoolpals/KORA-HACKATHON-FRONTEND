import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { ImCross } from "react-icons/im";
import '../Styles/Fonts.css';

export const NavBar = () => {
  const [showSidebar, setshowSidebar] = useState(false);
  const handleToggleshowSidebar = () => {
    setshowSidebar(!showSidebar);
  };
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  return (
    <div className='w-full  mx-auto xl:pt-[2rem] flex items-center justify-between'>
      <div className='navbar-container'>
        <img src="/assets/Images/kora 1.svg" alt="" className='xl:w-[107px] xl:h-[40px]' />
      </div>
      <div className='flex header hidden xl:flex  gap-[3vw] pt-[0.7vw] text-[1.5vw] text-[#F7F8FC] text-opacity-[0.8] font-light hero_navbar'>
        <div className=' text-white opacity-1'>
          <Link to="hero" activeClass="active" className='cursor-pointer' spy={true} offset={0} smooth={true} duration={500}>Home</Link>
        </div>
        <div className='cursor-pointer'>
          <Link to="award" className='cursor-pointer' activeClass="active" spy={true} offset={0} smooth={true} duration={500}>Awards</Link>
        </div>
        <div>
          <Link to="info" className='cursor-pointer' activeClass="active" spy={true} offset={0} smooth={true} duration={500}>Information</Link>
        </div>
        <div>
          <div className='cursor-pointer'> <a href="https://www.korahq.com/" target='_blank'>About Kora</a></div>
        </div>
      </div>
      <div className='xl:hidden'>
        {
          showSidebar ? (
            <ImCross className='sidebar-icon cursor-pointer' size={25} onClick={handleToggleshowSidebar} />
          ) : (
            <GiHamburgerMenu className='sidebar-icon cursor-pointer' size={30} onClick={handleToggleshowSidebar} />
          )
        }
      </div>
      <div className='hidden xl:block'></div>
      {/*      initial={{ x: '-100%' }}
        animate={{ x: showSidebar ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }} */}
      <motion.div
        animate={showSidebar ? "open" : "closed"}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        variants={variants}
        className='sidebar w-[60vw] xl:hidden absolute z-40 top-[25vw] md:top-[18vw] left-0 h-[80.1%] md:h-[90vw] top-4 bg-white  text-black flex flex-col gap-[1vw]'
      >
        <div className='flex flex-col pt-[10vw] gap-[5vw] px-[6vw] md:text-[3vw]'>
          <Link to="hero" activeClass="active" className='cursor-pointer' spy={true} offset={0} smooth={true} duration={500}>Home</Link>
          <Link to="award" className='cursor-pointer' activeClass="active" spy={true} offset={0} smooth={true} duration={500}>Awards</Link>
          <Link to="about" className='cursor-pointer' activeClass="active" spy={true} offset={0} smooth={true} duration={500}>Information</Link>
          <div>
            <div className='cursor-pointer'> <a href="https://www.korahq.com/" target='_blank'>About Kora</a></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
