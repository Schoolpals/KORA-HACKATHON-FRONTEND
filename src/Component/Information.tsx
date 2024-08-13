import React from 'react'
import "../Styles/Fonts.css"
import { useNavigate } from 'react-router'
export const Information = () => {
  const navigate = useNavigate()
  return (
    <div className='h-[52vw] w-screen  pt-[5vw] justify-center items-center text-black' id='info'>
      <div className='w-[86%] mx-auto flex flex-col text-[3vw] gap-[3vw] fonts-text '>
        <div className='flex gap-[0vw] flex-col'>
          <div className='italic text-[#354962]'>Explore the exciting <span className='text-blue-600'>agenda</span> for our <span className='text-blue-600'>hackathon</span> </div>
          <div className='text-[#354962] text-[20px]'>Tackling real challenges in emerging markets.</div>
        </div>
        <div className='flex flex-col items-end'>
          <div className=''>
            <img src="/assets/Images/speakingvideoimages.png" alt="imagevideo" className='w-[120vw] h-[32vw] ' />
          </div>
          <div>
            <button className='w-[14vw] rounded-[7px] text-[1.1vw] text-white h-[3.2vw] bg-[#2961ED]'>
              View Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
