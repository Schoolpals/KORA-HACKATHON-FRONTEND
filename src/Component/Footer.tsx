import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <div>
        <div className='w-[84%] pt-[3vw] mx-auto py-[1vw]'>
            <div className='flex justify-between items-center'>
                <img src="/assets/Images/korablack.svg" alt="blackoralog" width="70px"/>
                <div className='text-[#354962] fonts-text text-[16px]'>KoraHQ © 2024 All right reserved.</div>
                <div className='flex gap-[1.3vw] justify-evenly'>
                    <div><FaInstagram/></div>
                    <div><CiLinkedin/></div>
                    <div><RiTwitterXFill/></div>
                </div>
            </div>
        </div>
    </div>
  )
}
