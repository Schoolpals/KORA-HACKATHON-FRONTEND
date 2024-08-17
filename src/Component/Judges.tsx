import React, { useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ImImageArrayMentors, ImImageArrayBoards } from './Data/Data';

// Custom button components
const CustomLeftArrow = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className='right_arrow'
        style={{
            backgroundColor: '#2961ED',
            border: 'none',
            borderRadius: '50%',
            padding: '18px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        }}
    >
        <FaChevronLeft className='text-white' />
    </button>
);

const CustomRightArrow = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className='right_arrow'
        style={{
            backgroundColor: '#2961ED',
            border: 'none',
            borderRadius: '50%',
            padding: '18px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        }}
    >
        <FaChevronRight className='text-white' />
    </button>
);

export const Judges = () => {
    const [activeSet, setActiveSet] = useState('mentors');
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
            once: false,
        });
    }, []);
    const carouselRef = useRef(null);
    const handleNext = () => {
        if (carouselRef.current) {
            (carouselRef.current as any).next();
        }
    };
    const handlePrev = () => {
        if (carouselRef.current) {
            (carouselRef.current as any).previous();
        }
    };
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const imageArray = activeSet === 'mentors' ? ImImageArrayMentors : ImImageArrayBoards;

    return (
        <div className='w-screen xl:h-[88vh] h-[70vh] md:h-[47vh] flex justify-center items-center relative'>
            <div className='w-[90%]  mx-auto flex flex-col gap-[20vw] md:gap-[6vw] relative'>
                <div className='flex items-center   justify-center ' >
                    <button
                        data-aos="fade-left"
                        className={`md:w-[191px] md:rounded-[20px] rounded-[8px] w-[36vw] h-[12vw] inter-fonts md:h-[48px] ${activeSet !== "boards" ? "z-20" : "z-40"} ${activeSet !== "boards" ? "text-[#354962]" : "text-[#F7F8FC]"} ${activeSet === 'boards' ? 'bg-[#354962]' : 'bg-[#f7f8FC]'}`}
                        onClick={() => setActiveSet('boards')}
                    >
                        Judges
                    </button>
                    <button
                        data-aos="fade-right"
                        className={`md:w-[191px] w-[36vw] h-[12vw] rounded-[8px]   inter-fonts  md:rounded-[20px] md:h-[48px] ${activeSet !== "mentors" ? "z-20" : "z-40"}  ${activeSet !== "mentors" ? "text-[#354962]" : "text-[#F7F8FC]"} ${activeSet === 'mentors' ? 'bg-[#354962]' : 'bg-[#F7F8FC] '}`}
                        onClick={() => setActiveSet('mentors')}
                    >
                        Mentors
                    </button>

                </div>
                {/* Container for Buttons */}
                <div className='flex items-center justify-center'>
                    <div className='absolute left-0 z-10 ' >
                        <CustomLeftArrow onClick={handlePrev} />
                    </div>
                    <div className='w-[75%] mx-auto transition-opacity duration-200'>
                        <Carousel
                            ref={carouselRef}
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            keyBoardControl={true}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            {imageArray.map((item: any) => (
                                <div key={item.id} data-aos="fade-up" className='md:m-2  md:p-[2vw] cursor-pointer image_display flex flex-col items-center'>
                                    <img className='rounded-[10px]' src={item.src} alt={item.alt} />
                                    <div className='text-center md:text-[1.8vw] text-[3.7vw] xl:text-[18px]'>{item.name}</div>
                                    <div className='text-center md:text-[1vw] text-[2.7vw]  text-[14px]'>{item.position}</div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className='absolute right-0 z-10'>
                        <CustomRightArrow onClick={handleNext} />
                    </div>
                </div>
            </div>
        </div>
    );
};
