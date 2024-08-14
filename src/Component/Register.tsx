import React from 'react'

export const Register = () => {
  return (
    <div className='h-full w-[24vw] mx-auto bg-white rounded-[1.5rem] inter-fonts' >
        <div className='h-[41vw] justify-center w-full bg-white pt-[1vw] flex flex-col gap-[2vw] rounded-[10px]'>
            <div className='text-center text-[#354962] text-[1.4vw] font-bold'>Register Now</div>
            <form className='flex flex-col gap-[1vw]'>
                <div className='w-[85%] mx-auto flex flex-col items-start gap-[0.4vw]'>
                    <label htmlFor="" className='text-[#354962] text-[1vw] text-left font-bold'>Team Name</label>
                    <input required={true} type="text" className='w-[100%] mx-auto border-2 outline-none text-black p-[0.4vw] rounded-[5px]'/>
                </div>
                <div className='w-[85%] mx-auto flex flex-col items-start gap-[0.4vw]'>
                    <label htmlFor="" className='text-[#354962] text-left text-[1vw] font-bold'>Email Address </label>
                    <input required={true} type="email" className='w-[100%] mx-auto border-2 outline-none text-black p-[0.4vw] rounded-[5px]'/>
                </div>
                <div className='w-[85%] mx-auto flex flex-col items-start gap-[0.4vw]'>
                    <label htmlFor="" className='text-[#354962] text-left text-[1vw] font-bold'>Role</label>
                    <input required={true} type="text" className='w-[100%] mx-auto border-2 outline-none text-black p-[0.4vw] rounded-[5px]'/>
                </div>
                <div className='w-[85%] mx-auto flex flex-col items-start gap-[0.4vw]'>
                    <label htmlFor="" className='text-[#354962] text-left text-[1vw] font-bold'>Team Name</label>
                    <input type="text" required={true} className='w-[100%] mx-auto border-2 outline-none text-black p-[0.4vw] rounded-[5px]'/>
                </div>
                <div className='w-[85%] mx-auto flex flex-col items-start gap-[0.4vw]'>
                    <label htmlFor="" className='text-[#354962] text-left text-[1vw] font-bold'>Project Description</label>
                    <input type="text" required={true} className='w-[100%] mx-auto border-2 outline-none text-black p-[0.4vw] rounded-[5px]'/>
                </div>
                <div className='w-[85%] mx-auto flex flex-col items-center'>
                    <button type='submit' className='w-[15vw] rounded-[7px] text-white h-[3vw] bg-[#2961ED]'>
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
