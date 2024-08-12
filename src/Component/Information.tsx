import React from 'react'
import "../Styles/Fonts.css"
export const Information = () => {
  return (
    <div className='h-screen w-screen pt-[11vw] justify-center items-center text-black' id='info'>
      <div className='w-[88%] mx-auto flex items-center'>
        <div>
          <div className='fonts-text italic text-[#324154] text-[56px]'>About the hackathon</div>
          <div className='w-[70%] text-[#324154]'>In an era where financial inclusion and tech advancement drive economic growth, this hackathon offers a unique platform to tackle real challenges in emerging markets. By fostering innovation, practicality, and scalability, we aim to create solutions that improve payment systems and promote financial inclusion across Africa.</div>
        </div>
        <div>
          <div className=''>
            <img src="/assets/Images/videoimage.png" alt="imagevideo" className='w-[100vw]'/>
          </div>
        </div>
      </div>
    </div>
  )
}
