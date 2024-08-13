import React from 'react'
import { useNavigate } from 'react-router'

export const AboutKora = () => {
    const navigate = useNavigate()
    return (
        <div className='w-screen h-screen pt-[6.5rem]'>
            <div className='w-[90%] mx-auto  flex items-center p-8 justify-between bg-[#F0F2F6] bg-opacity-20'>
                <div>
                    <div><img src="/assets/Images/business.png" alt="koraimg" className='h-[30vw] w-[33vw]'/></div>
                </div>
                <div className='flex flex-col gap-[2.4vw]  justify-center'>
                    <div>
                        <div className='text-[48px] fonts-text italic text-left text-[#354962]'>About Kora</div>
                        <div className='text-[#354962] w-[45vw] text-[18px]'>Kora is a pan-African payment infrastructure. We offer a robust payment API for payment collections, disbursements and conversions for businesses anywhere in Africa. Our services enable global companies to scale rapidly across Africa. We power businesses to accept payments, payout, and convert across multiple channels (Cards, Mobile Money, QR and Bank Transfer) with just one single integration. Our service offerings span across three major blocks: Secure omni-channel payments, supercharged payouts and flexible & fast settlements.</div>
                    </div>
                    <div>
                        <button className='w-[191px] rounded-[7px] text-white h-[48px] bg-[#2961ED]' onClick={() => navigate("Register")}>
                            View Site
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
