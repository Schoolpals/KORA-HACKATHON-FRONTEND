import React from 'react'
import { Register } from './Register'

export const Form = () => {
    return (
        <div className='xl:h-[80vh] justify-center items-center flex md:my-[0vw] xl:my-[4rem] h-[70vw] my-[2rem]  md:h-[50vw] xl:pt-[6.5vw] w-screen' id='form'>
            <div className='w-[84%] md:h-[30vw] h-[30vw] relative px-[3vw] xl:h-[45vh] gap-[12vw] items-center justify-center p-[2.5vw] text-white  gap-[6vw] mx-auto bg-[#102649] rounded-[10px] md:rounded-[20px]'>
                <div className='flex flex-col   gap-[1vw]'>
                    <div className='fonts-text text-[2vw]  md:text-[2vw] md:text-[24px]'>Ready to join the Kora Hackathon?</div>
                    <div className='md:w-[41vw] w-[50vw] w-[40%] text-[1.3vw] xl:text-[1.3vw] md:text-[1.4vw]  text-white text-opacity-[0.9]'>Follow the registration guidelines and submit your team details to embark on this exciting journey of innovation and creativity. Click here to register now! </div>
                </div>
                <div className='flex items-start absolute  bottom-2 md:bottom-2 md:left-[50vw] left-[35vw] right-4 '>
                    <Register/>
                </div>
            </div>
        </div>
    )
}
