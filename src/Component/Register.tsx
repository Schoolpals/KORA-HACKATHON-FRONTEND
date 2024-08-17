import React, { useState } from 'react';
import { MdOutlineEdit } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";

export const Register = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
    const [members, setMembers] = useState([{ name: '', role: '', email: '' }]);
    const [teamName, setTeamName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    
    const [editMode, setEditMode] = useState<any>(null); // Added state for edit mode
    const [editTeamMode, setTeamEditMode] = useState<any>(null); 
    const [editValue, setEditValue] = useState<any>('');
    const [editTeamvalue, setEditTeamvalue] = useState<any>('');

    const handleMemberChange = (field:any, value:any) => {
        const newMembers:any = [...members];
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

    const handleSubmit = () => {
        setCurrentPage(2);
    };

    const handleTeamEditClick = (field: 'teamName') => {
        setTeamEditMode(field);
        setEditTeamvalue(field === 'teamName' ? teamName : '');
    };

    const handleTeamEditChange = (e: any) => {
        setEditTeamvalue(e.target.value);
    };

    const handleTeamEditSave = () => {
        if (editTeamMode  === 'teamName') {
            setTeamName(editTeamvalue);
        }
        setTeamEditMode(null);
    };

    const handleDismiss = () => {
        setCurrentPage(0);
        setMembers([{ name: '', role: '', email: '' }]);
        setProjectDescription('');
        setTeamName('');
    };

    const handleEditClick = (field: keyof typeof members[number], index: number) => {
        setEditMode({ field, index });
        setEditValue(members[index][field] || '');
    };

    const handleEditChange = (e:any) => {
        setEditValue(e.target.value);
    };


    const handleEditSave = () => {
        if (editMode || editMode) {
            const { field, index } = editMode;
            const newMembers:any = [...members];
            newMembers[index][field] = editValue;
            setMembers(newMembers);
        }
        setEditMode(null)
    };

    return (
        <div>
            {currentPage === 0 && (
                <div className='h-full sticky w-[24vw] mx-auto bg-[#F7F8FC] rounded-[1.5rem] inter-fonts'>
                    <div className='xl:h-[38vw] md:h-[45vw] h-[65vw] justify-center xl:w-full w-[50vw] md:w-[38vw] bg-[#F7F8FC] shadow-lg pt-[1vw] flex flex-col gap-[3vw] md:rounded-[10px]'>
                        <div className='text-center text-[#354962] text-[3vw] md:text-[1.4vw] font-bold'>Register Now</div>
                        <form className='flex flex-col gap-[2vw]'>
                            <div className='w-[85%] mx-auto flex flex-col items-start gap-[0.4vw]'>
                                <label className='text-[#354962] text-left text-[2vw] md:text-[1.7vw] xl:text-[1vw] font-bold'>Team Name</label>
                                <input
                                    required
                                    type='text'
                                    className='w-[100%] mx-auto border-[1px] md:h-[4vw] xl:h-[3vw] h-[6vw] border-black outline-none text-black xl:text-[1vw] md:text-[1.5vw]  text-[1.7vw] md:p-[0.4vw] rounded-[2px] md:rounded-[5px]'
                                    value={teamName}
                                    onChange={(e) => setTeamName(e.target.value)}
                                />
                            </div>
                            <div className='w-[85%] mx-auto flex flex-col items-start gap-[0.4vw]'>
                                <label className='text-[#354962] text-left text-[2vw]  md:text-[1.7vw] xl:text-[1vw]  font-bold'>Project Description</label>
                                <textarea
                                    required
                                    className='w-[100%] md:h-[9vw] border-[1px] border-black rounded-[2px] mx-auto border-2 outline-none h-[12vw] text-[1.7vw] xl:text-[1vw] text-black p-[0.4vw] md:rounded-[5px]'
                                    value={projectDescription}
                                    onChange={(e) => setProjectDescription(e.target.value)}
                                />
                            </div>
                            <div className='w-[85%] mx-auto flex flex-col items-center'>
                                <button type='button' className='w-[40vw] md:w-[17vw] md:rounded-[7px] text-white md:text-[1.6vw] text-[1.6vw] xl:text-[1vw] h-[4vw] md:h-[3vw] bg-[#2961ED]' onClick={() => setCurrentPage(1)}>
                                    Next
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {currentPage === 1 && (
                <div className='h-full sticky w-[24vw] mx-auto bg-[#F7F8FC] rounded-[1.5rem] inter-fonts'>
                    <div className='xl:h-[38vw] md:h-[45vw] h-[65vw] justify-center xl:w-full w-[50vw] md:w-[38vw] bg-[#F7F8FC] shadow-lg pt-[1vw] flex flex-col gap-[3vw] md:rounded-[10px]'>
                        <form className='flex flex-col gap-2 md:gap-[2vw]'>
                            <div>
                                <div className='text-center text-[#354962] text-[2vw] md:text-[1.9vw] font-bold'>
                                    {currentMemberIndex === 0 ? "Team Lead" : `Member ${currentMemberIndex}`}
                                </div>
                                <div className='w-[85%] mx-auto flex flex-col items-start gap-[1.6vw]'>
                                    <label className='text-[#354962] text-left text-[2vw] md:text-[1.7vw] xl:text-[1.2vw] font-bold'>Name</label>
                                    <input
                                        required
                                        type='text'
                                        className='w-[100%] mx-auto border-[1px] md:h-[4vw] xl:h-[3vw] h-[6vw] border-black outline-none text-black xl:text-[1vw] md:text-[1.5vw]  text-[1.7vw] md:p-[0.4vw] rounded-[2px] md:rounded-[5px]'
                                        value={members[currentMemberIndex]?.name}
                                        onChange={(e) => handleMemberChange('name', e.target.value)}
                                    />
                                    <label className='text-[#354962] text-left text-[2vw] md:text-[1.7vw] xl:text-[1vw] font-bold'>Role</label>
                                    <input
                                        required
                                        type='text'
                                        className='w-[100%] mx-auto border-[1px] md:h-[4vw] xl:h-[3vw] h-[6vw] border-black outline-none text-black xl:text-[1vw] md:text-[1.5vw]  text-[1.7vw] md:p-[0.4vw] rounded-[2px] md:rounded-[5px]'
                                        value={members[currentMemberIndex]?.role}
                                        onChange={(e) => handleMemberChange('role', e.target.value)}
                                    />
                                    <label className='text-[#354962] text-left text-[2vw] md:text-[1.7vw] xl:text-[1vw] font-bold'>Email Address</label>
                                    <input
                                        required
                                        type='email'
                                        className='w-[100%] mx-auto border-[1px] md:h-[4vw] xl:h-[3vw] h-[6vw] border-black outline-none text-black xl:text-[1vw] md:text-[1.5vw]  text-[1.7vw] md:p-[0.4vw] rounded-[2px] md:rounded-[5px]'
                                        value={members[currentMemberIndex]?.email}
                                        onChange={(e) => handleMemberChange('email', e.target.value)}
                                    />
                                </div>
                            </div>
                            {currentMemberIndex < 3 && (
                                <div className='w-[85%] outline-none mx-auto flex inter-fonts flex-col items-end'>
                                    <button type='button' className='text-black gap-2 flex items-center xl:text-[1.2vw] text-[1.5vw] md:text-[1.7vw] text-[#354962]' onClick={addMember}>
                                        <span className='text-[#354962]'>+</span>
                                        <span className='text-[#354962] text-left text-[2vw] md:text-[1.7vw] xl:text-[1vw] font-bold '>Add member</span>
                                    </button>
                                </div>
                            )}
                            <div className='w-[85%] mx-auto flex flex-col items-center'>
                                <button
                                    type='button'
                                    className='md:w-[17vw] w-[40vw] ject-small md:rounded-[7px] text-white md:text-[1.6vw]  text-[1.6vw] xl:text-[1vw] h-[4vw] md:h-[3vw] bg-[#2961ED]'
                                    onClick={handleSubmit}
                                >
                                    Next
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {currentPage === 2 && (
               <div className='fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex items-center justify-center'>
                 <div className='h sticky xl:w-[60%] w-[90%] md:w-[80%] rounded-[3rem] mx-auto bg-[#F7F8FC] md:rounded-[1.5rem] inter-fonts'>
                    <div className='xl:h-[34vw]  justify-center gap-[2vw] overflow-y-auto md:h-[36vw] h-[45vw]   w-full bg-[#F7F8FC] shadow-lg pt-[3vw] flex flex-col gap-[3vw] md:rounded-[10px]'>
            <div className=' text-[#354962] text-[2vw] w-[80%] mx-auto flex  gap-[1vw] justify-center  font-bold'>
                <div><MdErrorOutline className='text-yellow-800' /></div>
                <div className='xl:text-[1.3vw] md:text-[1.4vw] text-[1.7vw]  font-normal w-full  mx-auto'>Before completing your registration please take a moment to review the information ensure that all details are complete</div>
            </div>
            <div className='flex flex-col gap-[2vw] h-full overflow-y-auto justify-center  w-[80%] mx-auto '>
                <div className='justify-between relative text-[#354962]  text-[1.5vw] md:text-[1.1vw] gap-[3vw] items-center  pb-[1.3vw] flex font-medium'>
                    <div className='md:text-[1.5vw] xl:text-[1.3vw] text-[2vw]'>Team Name:</div>
                    <div className=' flex items-center gap-4'>
                       <div className='xl:text-[1.2vw] absolute right-20 text-[1.8vw] md:text-[1.4vw] font-normal fonts-text '>{teamName}</div>
                        <div className='absolute right-4' onClick={() => handleTeamEditClick('teamName')}>    
                            <MdOutlineEdit className='text-[#2961ED]  text-[1.5vw] cursor-pointer'/>
                        </div>
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-col items-start gap-[3vw]'>
               <div className='w-full mx-auto flex flex-col items-start gap-[3vw]'>
               <div className=' text-[#354962] text-[1.5vw] md:text-[1.2vw] w-full items-center justify-between flex font-medium'>
                        <div className='text-[#354962] md:text-[1.6vw] xl:text-[1.3vw] text-[2vw] font-medium '>Members Name:</div>
                        <div className='flex flex-col items-center justify-between md:gap-4'>   {members.map((member, index) => (
                            <div className='flex items-center  justify-center relative w-full'>
                                <div key={index} className='text-[#354962] absolute right-20 xl:text-[1.2vw] text-[1.8vw] md:text-[1.4vw] font-medium fonts-text'>
                                    {member.name}
                                </div>
                                <div className='absolute right-4'>
                                <MdOutlineEdit
                                            onClick={() => handleEditClick('name', index)}
                                            className='text-[#2961ED] text-[1.5vw] cursor-pointer'
                                        />
                                </div>
                            </div>
                        ))}</div>

                    </div>
                    <div className=' text-[#354962] text-[1.5vw] md:text-[1.2vw] w-full justify-between flex font-medium font-medium fonts-text'>
                        <div className='text-[#354962] md:text-[1.5vw] xl:text-[1.3vw] text-[2vw] font-medium'>Email Address:</div>
                        <div className='flex flex-col items-center justify-center md:gap-4'>   {members.map((member, index) => (
                            <div className='flex items-center relative w-full'>
                                <div key={index} className='text-[#354962] absolute right-20  xl:text-[1.2vw] text-[1.8vw] md:text-[1.4vw] font-normal'>
                                    {member.email}
                                </div>
                                <div className='absolute right-4'>
                                <MdOutlineEdit
                                            onClick={() => handleEditClick('email', index)}
                                            className='text-[#2961ED] text-[1.5vw] cursor-pointer'
                                        />
                                </div>
                            </div>
                        ))}</div>

                    </div>
               </div>
                    <div className='flex items-center pb-[3vw] md:pt[1vw] justify-center w-[80%] mx-auto'>
                        <button className='md:w-[14vw] w-[18vw] md:rounded-[7px] rounded-0  xl:text-[1.2vw] text-[1.4vw] md:text-[1.3vw] text-white xl:h-[3vw] md:h-[3.2vw] h-[3.8vw]  bg-[#2961ED]' onClick={() => setCurrentPage(3)}>
                            Complete
                        </button>
                    </div>

                </div>
            </div>
        </div>
                    { editMode && (
                        <div className=''>
                            <div className='bg-white p-4 rounded shadow-lg'>
                                <h2 className='text-lg font-bold mb-2'>Edit {editMode.field}</h2>
                                <input
                                    type='text'
                                    value={editValue}
                                    onChange={handleEditChange}
                                    className='border p-2 rounded text-black w-full'
                                />
                                <div className='mt-2 flex justify-end gap-2'>
                                    <button
                                        type='button'
                                        className='bg-gray-300 p-2 rounded'
                                        onClick={() => setEditMode(null)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type='button'
                                        className='bg-blue-500 text-white p-2 rounded'
                                        onClick={handleEditSave}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {editMode ? "" : editTeamMode && (
                        <div className=''>
                            <div className='bg-white p-4 rounded shadow-lg'>
                                {/* <h2 className='text-lg font-bold mb-2'>Edit {editTeamMode.field}</h2> */}
                                <input
                                    type='text'
                                    value={editTeamvalue}
                                    onChange={handleTeamEditChange}
                                    className='border p-2 rounded text-black w-full'
                                />
                                <div className='mt-2 flex justify-end gap-2'>
                                    <button
                                        type='button'
                                        className='bg-gray-300 p-2 rounded'
                                        onClick={() => setTeamEditMode(null)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type='button'
                                        className='bg-blue-500 text-white p-2 rounded'
                                        onClick={handleTeamEditSave}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
               </div>
            )}
              {
                currentPage === 3 && (
                    <div className='fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex items-center justify-center'>
                        <div className='xl:w-[60%] w-[90%] md:w-[80%] mx-auto bg-[#F7F8FC]   flex rounded-[1.5rem] inter-fonts'>
                        <div className='xl:h-[30vw] flex justify-center gap-[2vw] overflow-y-auto md:h-[40vw] h-[38vw] w-full bg-[#F7F8FC] shadow-lg pt-[3vw] flex flex-col gap-[3vw] md:rounded-[10px]'>
                            <div className='flex flex-col gap-[4vw]  w-[88%]  mx-auto'>
                                <div className='text-center text-[#354962] text-[1.5vw] md:text-[1.7vw] font-bold mt-[2vw]'>
                                    Welcome onboard!!
                                </div>
                                <div className=' text-center font-normal text-[1.5vw] xl:text-[1.2vw] text-[#354962]'>
                                    We’re excited to have you join us on this journey of innovation and creativity.
                                </div>
                                <div className='w-[85%] mx-auto flex flex-col items-center'>
                                    <button
                                        type='button'
                                        className='w-[15vw] md:rounded-[7px] rounded-0 text-white md:text-[1.6vw] text-[1.6vw] xl:text-[1vw] h-[4vw] md:h-[3vw] bg-[#2961ED]'
                                        onClick={handleDismiss}
                                    >
                                        Dismiss
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )
            }
        </div>
        
    )
};
// {currentPage === 2 && (
//     <div className='h-full sticky w-[24vw] mx-auto bg-[#F7F8FC] rounded-[1.5rem] inter-fonts'>
        
//     </div>
// )}