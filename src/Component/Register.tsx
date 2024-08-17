import React, { useState } from 'react';

export const Register = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
    const [members, setMembers] = useState([{ name: '', role: '', email: '' }]);

    const handleMemberChange = (field: any, value: any) => {
        const newMembers: any = [...members];
        newMembers[currentMemberIndex][field] = value;
        setMembers(newMembers);
    };

    const addMember = () => {
        if (currentMemberIndex < 3) {
            setCurrentMemberIndex(currentMemberIndex + 1);
            if (currentMemberIndex + 1 === members.length) {
                setMembers([...members, { name: '', role: '', email: '' }]);
            }
        }
    };

    return (
        <div>
            {currentPage === 0 && (
                <div className='h-full sticky w-[24vw] mx-auto bg-[#F7F8FC] rounded-[1.5rem] inter-fonts'>
                    <div className='h-[38vw] justify-center w-full bg-[#F7F8FC] shadow-lg pt-[1vw] flex flex-col gap-[3vw] rounded-[10px]'>
                        <div className='text-center text-[#354962] text-[1.4vw] font-bold'>Register Now</div>
                        <form className='flex flex-col gap-[2vw]'>
                            <div className='w-[85%] mx-auto flex flex-col items-start gap-[0.4vw]'>
                                <label className='text-[#354962] text-left text-[1vw] font-bold'>Team Name</label>
                                <input required type='text' className='w-[100%] mx-auto border-2 outline-none text-black p-[0.4vw] rounded-[5px]' />
                            </div>
                            <div className='w-[85%] mx-auto flex flex-col items-start gap-[0.4vw]'>
                                <label className='text-[#354962] text-left text-[1vw] font-bold'>Project Description</label>
                                <textarea required className='w-[100%] h-[9vw] mx-auto border-2 outline-none text-black p-[0.4vw] rounded-[5px]' />
                            </div>
                            <div className='w-[85%] mx-auto flex flex-col items-center'>
                                <button type='button' className='w-[15vw] rounded-[7px] text-white h-[3vw] bg-[#2961ED]' onClick={() => setCurrentPage(1)}>
                                    Next
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {currentPage === 1 && (
                <div className='h-full sticky w-[24vw] mx-auto bg-[#F7F8FC] rounded-[1.5rem] inter-fonts'>
                    <div className='h-[38vw] justify-center w-full bg-[#F7F8FC] shadow-lg pt-[1vw] flex flex-col gap-[2vw] rounded-[10px]'>
                        <form className='flex flex-col gap-[2vw]'>
                            <div>
                                <div className='text-center text-[#354962] text-[1.4vw] font-bold'>
                                    {currentMemberIndex === 0 ? "Team Lead" : `Member ${currentMemberIndex}`}
                                </div>
                                <div className='w-[85%] mx-auto flex flex-col items-start gap-[1.6vw]'>
                                    <label className='text-[#354962] text-left text-[1vw] font-bold'>Name</label>
                                    <input
                                        required
                                        type='text'
                                        className='w-[100%] mx-auto border-2 outline-none text-black p-[0.4vw] rounded-[5px]'
                                        value={members[currentMemberIndex].name}
                                        onChange={(e) => handleMemberChange('name', e.target.value)}
                                    />
                                    <label className='text-[#354962] text-left text-[1vw] font-bold'>Role</label>
                                    <input
                                        required
                                        type='text'
                                        className='w-[100%] mx-auto border-2 outline-none text-black p-[0.4vw] rounded-[5px]'
                                        value={members[currentMemberIndex].role}
                                        onChange={(e) => handleMemberChange('role', e.target.value)}
                                    />
                                    <label className='text-[#354962] text-left text-[1vw] font-bold'>Email Address</label>
                                    <input
                                        required
                                        type='email'
                                        className='w-[100%] mx-auto border-2 outline-none text-black p-[0.4vw] rounded-[5px]'
                                        value={members[currentMemberIndex].email}
                                        onChange={(e) => handleMemberChange('email', e.target.value)}
                                    />
                                </div>
                            </div>
                            {currentMemberIndex < 3 && (
                                <div className='w-[85%] mx-auto flex inter-fonts flex-col items-end'>
                                    <button type='button' className='text-black gap-2 flex items-center text-[16px] text-[#354962]' onClick={addMember}>
                                        <span className='text-[#354962]'>+</span>
                                        <span className='text-[#354962] xl:text-[1.2vw] text-[3.5vw] md:text-[2.2vw]'>Add member</span>
                                    </button>
                                </div>
                            )}
                            <div className='w-[85%] mx-auto flex flex-col items-center'>
                                <button type='button' className='w-[15vw] rounded-[7px] text-white h-[3vw] bg-[#2961ED]' >
                                    Next
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
