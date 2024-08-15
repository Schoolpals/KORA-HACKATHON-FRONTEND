import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <div>
        <div className='w-[84%] pt-[3vw] mx-auto py-[1vw]'>
            <div className='flex justify-between items-center'>
                <img src="/assets/Images/korablack.svg" alt="blackoralog" width="70vw"/>
                <div className='text-[#354962] fonts-text text-[2vw] md:text-[16px]'>KoraHQ © 2024 All right reserved.</div>
                <div className='flex gap-[1.3vw] justify-evenly'>
                    <div className='cursor-pointer'><a href="https://www.instagram.com/thekorahq/" target='_blank'><FaInstagram/></a></div>
                    <div className='cursor-pointer'> <a href="https://www.linkedin.com/company/thekorahq/?originalSubdomain=ca" target='_blank'><CiLinkedin/></a></div>
                    <div className='cursor-pointer'> <a href="https://x.com/thekorahq?s=21&t=qy9zpk4uBCPO-THJ6cdRTQ" target='_blank'><RiTwitterXFill/></a></div>
                </div>
            </div>
        </div>
    </div>
  )
}
