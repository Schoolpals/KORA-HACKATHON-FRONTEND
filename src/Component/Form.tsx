import React from 'react'
import { Register } from './Register'

export const Form = () => {
    return (
        <div className='h-[90vh] my-[1rem] pt-[3.5vw] w-screen' >
            <div className='w-[86%] h-full gap-[12vw] justify-center p-[2.5vw] text-white h-[40vh] flex items-center  gap-[2vw] mx-auto bg-[#102649] rounded-[20px]'>
                <div className='flex flex-col'>
                    <div className='fonts-text italic text-[24px]'>Ready to join the Kora Hackathon?</div>
                    <div className='w-[41vw] text-white text-opacity-[0.9]'>Follow the registration guidelines and submit your team details to embark on this exciting journey of innovation and creativity. Click here to register now! </div>
                </div>
                <div>
                    <Register/>
                </div>
            </div>
        </div>
    )
}
