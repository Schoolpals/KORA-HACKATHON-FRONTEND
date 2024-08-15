import React from 'react'
import "../Styles/Fonts.css"
import { useNavigate } from 'react-router'
export const Information = () => {
  const navigate = useNavigate()
  return (
    <div className='xl:h-[62vw] md:-[62vw]   w-screen h-[50vh] justify-center flex my-[3vw] md:my-[3vw] xl:my-[0vw]  xl:py-[0vw] justify-center items-center text-black' id='info'>
      <div className='w-[86%] mx-auto flex flex-col text-[3vw] gap-[3vw] fonts-text '>
        <div className='flex gap-[0vw] flex-col'>
          <div className='italic text-[#354962]'>Explore the exciting <span className='text-blue-600'>agenda</span> for our <span className='text-blue-600'>hackathon</span> </div>
          <div className='text-[#354962] md:text-[20px]'>Tackling real challenges in emerging markets.</div>
        </div>
        <div className='flex flex-col items-end gap-[1vw]'>
          <div className=''>
            <img src="/assets/Images/speakingvideoimages.png" alt="imagevideo" className='md:w-[120vw] w-full h-[45vw]  md:h-[32vw] ' />
          </div>
          <div>
            <button className='md:w-[14vw] w-[18vw] md:rounded-[7px] text-[1.6vw] md:text-[1.1vw] text-white xl:h-[3.6vw] md:h-[4.2vw] h-[6vw]  bg-[#2961ED]'>
              View Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
