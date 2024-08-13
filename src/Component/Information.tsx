import React from 'react'
import "../Styles/Fonts.css"
import { useNavigate } from 'react-router'
export const Information = () => {
  const navigate = useNavigate()
  return (
    <div className='h-screen w-screen pt-[11vw] justify-center items-center text-black' id='info'>
      <div className='w-[88%] mx-auto flex items-center'>
        <div className='flex flex-col gap-[2vw]'>
          <div>          <div className='fonts-text italic text-[#324154] text-[56px]'>About the hackathon</div>
            <div className='w-[76%] text-[#324154] text-[18px]'>In an era where financial inclusion and tech advancement drive economic growth, this hackathon offers a unique platform to tackle real challenges in emerging markets. By fostering innovation, practicality, and scalability, we aim to create solutions that improve payment systems and promote financial inclusion across Africa.</div></div>
          <div>
            <button className='w-[191px] rounded-[7px] text-white h-[48px] bg-[#2961ED]' onClick={() => navigate("Register")}>
              View Guideline
            </button>
          </div>
        </div>
        <div>
          <div className=''>
            <img src="/assets/Images/videoimage.png" alt="imagevideo" className='w-[120vw] h-[40vw]' />
          </div>
        </div>
      </div>
    </div>
  )
}
