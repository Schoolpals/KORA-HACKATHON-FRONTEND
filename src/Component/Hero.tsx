
import "../Styles/Fonts.css"
import { NavBar } from './NavBar';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router';

export const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className='  xl:h-[54dvw]  md:h-[110dvw] h-[90dvh] overflow-hidden w-full text-white Hero'>
      <div className='w-[87%] mx-auto'>
        <NavBar />
        <hr className='opacity-20 w-full xl:hidden mt-2' />
        <div className='xl:flex xl:h-full justify-center'>
          <div className='xl:h-[42.5vw] gap-[2vw] w-[82%] xl:pt-0  md:h-[70vw] h-[65vh]  justify-center flex flex-col hero_text '>
            <div className='font-bold  gap-[2vw]  text-[9vw] md:text-[9vw] flex flex-col   xl:text-[5.5vw]  leading-[9vw] xl:leading-[3.5rem]'>
              <span className="fakwa">Kora</span>
              <span className='bg-gradient-to-r from-[#61ADE8] to-[#92A2E0] bg-clip-text text-transparent'>Hackathon 1.0</span>
            </div>
            <div className='flex flex-col xl:gap-[2vw] items-start md:gap-[0vw] xl:h-[11.5vw]  '>
              <div className='xl:max-w-[82%] xl:text-left   leading-[1.5rem] font-light md:text-[2.6vw] text-[4vw] xl:text-[20px] text-opacity-20 text-[#A1A6AD]'>
                Join our 39-day fintech hackathon to unlock your potential and explore new market opportunities.
              </div>
              <Link to="form" className='cursor-pointer relative xl:top-0 md:-top-[4vw] ' activeClass="active" spy={true} offset={0} smooth={true} duration={500}>
                <button className='xl:w-[191px] w-[33vw] text-[4vw] md:rounded-[7px] rounded-[4px]   md:w-[27vw] xl:text-[1.4vw] md:text-[3vw] xl:rounded-[7px] h-[10vw] xl:h-[48px] md:h-[8vw]  bg-[#2961ED]' >
                  Register Now
                </button>
              </Link>

            </div>
          </div>
          <div className="pt-[3.5rem] hidden xl:block">
            <img src="/assets/Images/herophone.png" alt="" className="w-[316px] h-[540px]" />
          </div>
          {/* <div>
            <Register />
          </div> */}
        </div>
      </div>
    </div>
  )
}
