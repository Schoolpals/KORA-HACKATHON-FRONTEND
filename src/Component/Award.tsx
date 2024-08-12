import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
export const Award = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const imageArray = [
    { src: "/assets/Images/Fincralogo.svg", id: 1, alt: "FrincaImg" },
    { src: "/assets/Images/Piggyvestlogo.svg", id: 2, alt: "PiggyVestImg" },
    { src: "/assets/Images/Quidaxlogo.svg", id: 3, alt: "QuidaxImg" },
    { src: "/assets/Images/Divestlgo.svg", id: 4, alt: "DivestImg" },
  ];

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 200;
        if (newPosition >= imageArray.length * 230) {
          return 0;
        }
        return newPosition;
      });
    }, 2000);

    return () => clearInterval(scrollInterval);
  }, [imageArray.length]);


  return (
    <div className='h-screen w-screen text-black bg-white  flex flex-col gap-[3vw]' id='award'>
      <div className='w-[50%] text-[#354962] mx-auto fonts-text italic text-[20px] pt-[1.7rem]'>
        <div className='flex items-center gap-[3vw] text-[25px]'>
          <div className='nowrap'>Sponsored by</div>
          <div className='flex overflow-hidden items-center justify-start gap-[5vw]' style={{ width: "35vw" }}>
            <div
              className='flex gap-[6vw]'
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                transition: 'transform 1s ease-out',
              }}
            >
              {imageArray.map((item) => (
                <img
                  key={item.id}
                  src={item.src}
                  alt={item.alt}
                  width="120px"
                  height="120px"
                  style={{ flexShrink: 0 }} // Prevent image from shrinking
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[82%]  mx-auto mt-[1rem] flex flex-col gap-[3vw]">
        <div className="fonts-text   italic text-center text-[56px] text-[#354962]">6 Million Naira  Prize</div>
        <div className="flex items-center justify-center gap-[4vw]">
          <div className="">
            <div className="border-2 rounded-[20px] border-opacity-[0.2] relative border-[#919BC8] w-[27vw]">
              <img src="/assets/Images/2ndplaceaward.svg" alt="Silverolgo" className="absolute -top-8  -right-8" />
              <div className="p-2 rounded-[20px] bg-gray-100">
                <div className="bg-gradient-to-t from-[#979799] via-bg-gray-400 to-[#FBFCFF] h-[31vw] text-black rounded-[20px] border-2">
                  <div className="w-[80%] mx-auto my-[2rem]">
                    <div className="flex flex-col gap-[2.6vw]">
                      <div className="text-[24.56px] fonts-text italic font-light">2nd place</div>
                      <div className="flex flex-col gap-[1.7vw]">
                        <div className=" fonts-text italic text-[24.6px]">NGN 2,000,000</div>
                        <div className="text-[#324154] italic fonts-text">What’s included?</div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-[1vw] items-center">
                          <FaStar />
                          <div>
                            Free internship program at
                            Kora
                          </div>
                        </div>
                        <div className="flex gap-[1vw] items-center">
                          <FaStar />
                          <div>
                            Lorem Ipsum donor
                          </div>
                        </div>
                        <div className="flex gap-[1vw] items-center">
                          <FaStar />
                          <div>
                            Lorem Ipsum donor
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border-2 rounded-[20px] border-opacity-[0.2] relative border-[#919BC8] w-[27vw]">
              <img src="/assets/Images/1stplacelogo.svg" alt="Silverolgo" className="absolute -top-8  -right-8" />
              <div className="p-2 rounded-[20px] bg-[#CC9F42] bg-opacity-[0.15]">
                <div className="bg-gradient-to-b from-[#CC9F4299] via-bg-[#874E0199] to-[#874E0199]  h-[31vw] text-black bg-opacity-[0.4] rounded-[20px] border-2">
                  <div className="w-[80%] mx-auto my-[2rem]">
                  <div className="flex flex-col gap-[2.6vw]">
                      <div className="text-[24.56px] fonts-text italic font-light">1st  place</div>
                      <div className="flex flex-col gap-[1.7vw]">
                        <div className=" fonts-text italic text-[24.6px]">NGN 3,000,000</div>
                        <div className="text-[#324154] italic fonts-text">What’s included?</div>
                      </div>
                      <div className="flex flex-col gap-3">
                      <div className="flex gap-[1vw] items-center">
                          <FaStar />
                          <div>
                            One on One meet with the CEO
                          </div>
                        </div>
                        <div className="flex gap-[1vw] items-center">
                          <FaStar />
                          <div>
                            Free internship program at
                            Kora
                          </div>
                        </div>
                        <div className="flex gap-[1vw] items-center">
                          <FaStar />
                          <div>
                            Lorem Ipsum donor
                          </div>
                        </div>
                        <div className="flex gap-[1vw] items-center">
                          <FaStar />
                          <div>
                            Lorem Ipsum donor
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border-2 rounded-[20px] border-opacity-[0.2] relative border-[#919BC8] w-[27vw]">
              <img src="/assets/Images/3rdplacelogo.svg" alt="Silverolgo" className="absolute -top-8  -right-8" />
              <div className="p-2 rounded-[20px] bg-[#C2A07A] bg-opacity-20">
                <div className="bg-gradient-to-b from-[#C2A07A80]  via-bg-gray-400 to-[#61513D80] h-[31vw] text-black rounded-[20px] border-2">
                  <div className="w-[80%] mx-auto my-[2rem]">
                  <div className="flex flex-col gap-[2.6vw]">
                      <div className="text-[24.56px] fonts-text italic font-light">3rd place</div>
                      <div className="flex flex-col gap-[1.7vw]">
                        <div className=" fonts-text italic text-[24.6px]">NGN 1,000,000</div>
                        <div className="text-[#324154] italic fonts-text">What’s included?</div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-[1vw] items-center">
                          <FaStar />
                          <div>
                            Free internship program at
                            Kora
                          </div>
                        </div>
                        <div className="flex gap-[1vw] items-center">
                          <FaStar />
                          <div>
                            Lorem Ipsum donor
                          </div>
                        </div>
                        <div className="flex gap-[1vw] items-center">
                          <FaStar />
                          <div>
                            Lorem Ipsum donor
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
