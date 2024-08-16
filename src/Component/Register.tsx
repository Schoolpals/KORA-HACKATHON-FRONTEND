import React, { useState } from 'react';

export const Register = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [members, setMembers] = useState([{ name: '', role: '', email: '' }]);

    const addMember = () => {
        if (members.length < 4) {
            setMembers([...members, { name: '', role: '', email: '' }]);
        }
    };

    const handleMemberChange = (index:any, field:any, value:any) => {
        const newMembers:any = [...members];
        newMembers[index][field] = value;
        setMembers(newMembers);
    };

    return (
        <div>
            {currentPage === 1 && (
                <div className='h-full sticky w-[24vw] mx-auto bg-[#F7F8FC] rounded-[1.5rem] inter-fonts'>
                    <div className='h-[38vw] justify-center w-full bg-[#F7F8FC] shadow-lg pt-[1vw] flex flex-col gap-[2vw] rounded-[10px]'>
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
                                <button type='button' className='w-[15vw] rounded-[7px] text-white h-[3vw] bg-[#2961ED]' onClick={() => setCurrentPage(2)}>
                                    Next
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {currentPage === 2 && (
                <div className='h-full sticky w-[24vw] mx-auto bg-[#F7F8FC] rounded-[1.5rem] inter-fonts'>
                    <div className='h-auto justify-center w-full bg-[#F7F8FC] shadow-lg pt-[1vw] flex flex-col gap-[2vw] rounded-[10px]'>
                        <div className='text-center text-[#354962] text-[1.4vw] font-bold'>Team Members</div>
                        <form className='flex flex-col gap-[2vw]'>
                            {members.map((member, index) => (
                                <div key={index} className='w-[85%] mx-auto flex flex-col items-start gap-[0.4vw]'>
                                    <label className='text-[#354962] text-left text-[1vw] font-bold'>Name</label>
                                    <input
                                        required
                                        type='text'
                                        className='w-[100%] mx-auto border-2 outline-none text-black p-[0.4vw] rounded-[5px]'
                                        value={member.name}
                                        onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                                    />
                                    <label className='text-[#354962] text-left text-[1vw] font-bold'>Role</label>
                                    <input
                                        required
                                        type='text'
                                        className='w-[100%] mx-auto border-2 outline-none text-black p-[0.4vw] rounded-[5px]'
                                        value={member.role}
                                        onChange={(e) => handleMemberChange(index, 'role', e.target.value)}
                                    />
                                    <label className='text-[#354962] text-left text-[1vw] font-bold'>Email Address</label>
                                    <input
                                        required
                                        type='email'
                                        className='w-[100%] mx-auto border-2 outline-none text-black p-[0.4vw] rounded-[5px]'
                                        value={member.email}
                                        onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                                    />
                                </div>
                            ))}
                            {members.length < 4 && (
                                <div className='w-[85%] mx-auto flex flex-col items-center'>
                                    <button type='button' className='w-[15vw] rounded-[7px] text-white h-[3vw] bg-[#2961ED]' onClick={addMember}>
                                        Add Member
                                    </button>
                                </div>
                            )}
                            <div className='w-[85%] mx-auto flex flex-col items-center'>
                                <button type='button' className='w-[15vw] rounded-[7px] text-white h-[3vw] bg-[#2961ED]' onClick={() => setCurrentPage(3)}>
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
