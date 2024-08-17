import React from 'react'
import { Link } from 'react-scroll';
import {motion} from 'framer-motion'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const GuideLines = () => {
    return (
        <div className='h-screen w-screen'>
            <div className='w-[100%]  mx-auto'>
                <div className='w-screen h-[6vw] xl:fixed top-0 bg-white z-50'></div>
                <div className='w-[88%] xl:flex  relative gap-[4vw] mx-auto mt-[4rem] md:mt-[5rem]' >
                    <motion.div
                     initial={{ opacity: 0,x : 0 }}
                     animate={{ opacity: 1,x:0,transition: {duration : 0.5} }}
                     exit={{ opacity:0,x:0}}
                     className='text-[#324154] xl:fixed flex flex-col gap-[3vw] md:gap-[0] fonts-text' >
                        <div className='xl:text-[1.5vw] md:text-[3vw] text-[4vw]'>Rules and Guidelines</div>
                        <div className='flex xl:flex-col flex xl:items-left guidelines_items justify-center mt-[3vw] xl:gap-[1vw] md:gap-[4vw] gap-[4vw] '>
                            <div className='xl:text-[1.1vw] md:text-[2.5vw] text-[3.5vw]'>On this page</div>
                            <div className='xl:text-[1vw] md:text-[2.3vw] text-[3.2vw] text-[#2376F3]' ><Link to="Rules" className='cursor-pointer' activeClass="active" spy={true} offset={-100} smooth={true} duration={500}>Rules</Link></div>
                            <div className='xl:text-[1vw] md:text-[2.3vw] text-[3.2vw] text-[#2376F3]'><Link to="Guidelines" className='cursor-pointer' activeClass="active" spy={true} offset={0} smooth={true} duration={500}>Guidelines</Link></div>

                        </div>
                    </motion.div>
                    <div className='xl:text-[1vw] pb-[2rem] absolute right-0 text-[#324154] md:text-[1.8vw] flex flex-col gap-[1.2vw] pt-[5.5vw]   xl:w-[75%] mx-auto'>
                        <div className='xl:text-[1vw] md:text-[2.3vw] text-[3.2vw] fonts-text text-[#324154] '>Last updated 8th August, 2024</div>
                        <div className='xl:text-[1.1vw] md:text-[2vw] text-[3vw]'>Welcome to the Kora Hackathon! We are excited to have you join us for this innovative event. Please read through the following rules and guidelines carefully before registering.</div>
                        <div className='xl:text-[2.5vw] inter-fonts md:text-[5vw] text-[6.5vw] font-bold xl:py-[0vw] md:py-[0.6vw] py-[3vw] ' id='Rules'>Rules :</div>
                        <div className='flex flex-col xl:gap-[2vw] md:gap-[2.3vw] gap-[3vw] ' >
                            <div className='flex flex-col xl:gap-[0.7vw] md:gap-[1.5vw] gap-[2vw] '>

                                <div className='xl:text-[1.3vw] fonts-text md:text-[2.3vw] text-[3.9vw] font-medium'>Team composition</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Team Size: Teams can have a maximum of 4 members and a minimum of 1 member.</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Age Requirement: All participants must be at least 18 years old. Those younger than 18 must provide a consent letter from a legal guardian.</div>
                            </div>
                            <div className='flex flex-col xl:gap-[0.6vw] md:gap-[1.5vw] gap-[2vw]'>
                                <div className='xl:text-[1.3vw] fonts-text md:text-[2.3vw] text-[3.9vw] font-medium'>Registration</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Eligibility: Volunteers and committee members are not permitted to compete.</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Team Registration: The team lead must register their team. Detailed registration guidelines can be found here.</div>
                            </div>
                            <div className='flex flex-col xl:gap-[0.6vw] md:gap-[1.5vw] gap-[2vw]'>
                                <div className='xl:text-[1.3vw] fonts-text md:text-[2.3vw] text-[3.9vw] font-medium'>Project Requirements</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Acknowledgment: Only registered teams and their members will be recognized as participants.</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Deployment: Projects must be deployed on a live link.</div>
                            </div>
                            <div className='flex flex-col xl:gap-[0.6vw] md:gap-[1.5vw] gap-[2vw]'>
                                <div className='xl:text-[1.3vw] fonts-text md:text-[2.3vw] text-[3.9vw] font-medium'>Project Ownership</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Consent for Use: All project ideas developed during the hackathon can be used by the organizers post-hackathon with the creators' consent.</div>
                            </div>
                            <div className='flex flex-col xl:gap-[0.6vw] md:gap-[1.5vw] gap-[2vw]'>
                                <div className='xl:text-[1.3vw] fonts-text md:text-[2.3vw] text-[3.9vw] font-medium'>Submission Guidelines</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Deadline: Only projects submitted within the stipulated timeframe will be recognized and judged.</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Submission Requirements: Submissions must include code, documentation, slides, and prototypes as specified. </div>
                            </div>
                            <div className='flex flex-col xl:gap-[0.6vw] md:gap-[1.5vw] gap-[2vw]'>
                                <div className='xl:text-[1.3vw] fonts-text md:text-[2.3vw] text-[3.9vw] font-medium'>Awards</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Distribution: Awards will be distributed as communicated at the beginning of the hackathon.</div>
                            </div>
                            <div className='flex flex-col xl:gap-[0.6vw] md:gap-[1.5vw] gap-[2vw]'>
                                <div className='xl:text-[1.3vw] fonts-text md:text-[2.3vw] text-[3.9vw] font-medium'>Code Requirements</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Public Repository: All code must be hosted in a public repository.</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Continuing Work: If continuing an old project, communicate what has been built before and what will be built during the hackathon. </div>
                            </div>
                            <div className='flex flex-col xl:gap-[0.6vw] md:gap-[1.5vw] gap-[2vw]'>
                                <div className='xl:text-[1.3vw] fonts-text md:text-[2.3vw] text-[3.9vw] font-medium'>Code Ownership and Validation</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Original Code: Submitted codes must be originally owned by the team members. Outsourced codes must be communicated, and permission obtained from the organizers.</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Validation: Teams must cooperate with code checks to ensure compliance with the hackathon period. </div>
                            </div>
                            <div className='flex flex-col xl:gap-[0.6vw] md:gap-[1.5vw] gap-[2vw]'>
                                <div className='xl:text-[1.3vw] fonts-text md:text-[2.3vw] text-[3.9vw] font-medium'>Conduct</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Harassment: Any form of harassment will not be tolerated. Consequences may include removal from the event and loss of participation rights.</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Professionalism: Maintain a professional tone on communication platforms. Bullying of any form will not be tolerated.</div>
                            </div>
                            <div className='flex flex-col xl:gap-[0.6vw] md:gap-[1.5vw] gap-[2vw]'>
                                <div className='xl:text-[1.3vw] fonts-text md:text-[2.3vw] text-[3.9vw] font-medium'>Fair Play</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Respect: Respect personal space, individuals, and property during all hackathon stages.</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Ethics: Adhere to ethical standards. Cheating, plagiarism, or unfair practices will result in disqualification.</div>
                            </div>
                            <div className='flex flex-col xl:gap-[0.6vw] md:gap-[1.5vw] gap-[2vw]'>
                                <div className='xl:text-[1.3vw] fonts-text md:text-[2.3vw] text-[3.9vw] font-medium'>Liability</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Responsibility: The organizers and sponsors are not liable for any damages, losses, or injuries. Participants are responsible for their safety and actions.</div>
                            </div>
                            <div className='flex flex-col xl:gap-[0.6vw] md:gap-[1.5vw] gap-[2vw]'>
                                <div className='xl:text-[1.3vw] fonts-text md:text-[2.3vw] text-[3.9vw] font-medium'>Consent and Media Release</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Media Coverage: Participants who do not consent to media coverage must indicate so. A lack of indication will be regarded as consent.</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Autonomy: Organizers have full autonomy over pictures taken during the hackathon.</div>
                            </div>
                            <div className='flex flex-col xl:gap-[0.6vw] md:gap-[1.5vw] gap-[2vw]'>
                                <div className='xl:text-[1.3vw] fonts-text md:text-[2.3vw] text-[3.9vw] font-medium'>Changes to the Rules</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Right to Change: Organizers reserve the right to change rules with a 3-day notice before the changes take effect.</div>
                            </div>
                        </div>
                        <div className='xl:text-[2.5vw] inter-fonts md:text-[5vw] text-[6.5vw] font-bold tracking-[1px] xl:pb-[0.3vw] md:pt-[1vw] pt-[3.5vw] '  id='Guidelines'>Guildlines :</div>
                        <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw] font-semibold'>These guidelines are suggested best practices. Adherence is not mandatory but will be rewarded.</div>
                        <div className='flex flex-col xl:gap-[2vw] md:gap-[2.3vw] gap-[3vw] '>
                            <div className='flex flex-col xl:gap-[0.6vw] md:gap-[1.5vw] gap-[2vw]'>
                                <div className='xl:text-[1.3vw] fonts-text md:text-[2.3vw] text-[3.9vw] font-medium'>Project Development</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Theme Alignment: Projects should align with the hackathon theme proposed by the organizers.</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Inclusivity: Projects should be inclusive of gender, religion, ethnicity, and race.</div>
                            </div>
                            <div className='flex flex-col xl:gap-[0.6vw] md:gap-[1.5vw] gap-[2vw]'>
                                <div className='xl:text-[1.3vw] fonts-text md:text-[2.3vw] text-[3.9vw] font-medium'>Team Collaboration</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Daily Build: Team members are encouraged to work on their projects daily during the build phase.</div>
                            </div>
                            <div className='flex flex-col xl:gap-[0.6vw] md:gap-[1.5vw] gap-[2vw]'>
                                <div className='xl:text-[1.3vw] fonts-text md:text-[2.3vw] text-[3.9vw] font-medium'>Assistance and Communication</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Inquiries: Direct all questions to authorized personnel or ask on the general communication platform.</div>
                            </div>
                            <div className='flex flex-col xl:gap-[0.6vw] md:gap-[1.5vw] gap-[2vw]'>
                                <div className='xl:text-[1.3vw] fonts-text md:text-[2.3vw] text-[3.9vw] font-medium'>Conduct</div>
                                <div className='xl:text-[1vw] md:text-[1.9vw] text-[3vw]'>Participation: Everyone is encouraged to participate in games and networking activities during the hackathon.</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
