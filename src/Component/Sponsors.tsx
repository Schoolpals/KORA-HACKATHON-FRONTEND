import React, { useEffect, useState } from 'react'

export const Sponsors = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const imageArray = [
        { src: "/assets/Images/Fincralogo.svg", id: 1, alt: "FrincaImg" },
        { src: "/assets/Images/Piggyvestlogo.svg", id: 2, alt: "PiggyVestImg" },
        { src: "/assets/Images/Quidaxlogo.svg", id: 3, alt: "QuidaxImg" },
        { src: "/assets/Images/Divestlgo.svg", id: 4, alt: "DivestImg" },
    ];
    const doubledImageArray = [...imageArray, ...imageArray]
    return (
        <div className='flex relative  z-50 justify-center xl:mt-0 md:mt-[2.5vw] mt-[2.5vw] md:gap-[3vw] gap-[2vw] xl:text-[10px] items-center'>
            <div className='nowrap md:text-[2vw] text-[3vw] xl:text-[1.5vw] text-opacity-[0.4] text-[#354962] md:text-[3vw]'>Sponsored by</div>
            <div className='overflow-hidden  md:w-[50vw] w-[65vw]'>
                <div
                    className='flex gap-[6vw] '
                    style={{
                        width: `${doubledImageArray.length * 100}px`,
                        animation: 'scroll 5s linear infinite',
                    }}
                >
                    {doubledImageArray.map((item, index) => (
                        <img
                            key={index}
                            src={item.src}
                            alt={item.alt}
                            width="80vw"
                            height="80vw"
                            style={{ flexShrink: 0 }} // Prevent image from shrinking
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
