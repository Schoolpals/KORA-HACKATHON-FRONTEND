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
 const doubledImageArray = [...imageArray, ...imageArray]
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
    <div className='h-[59vw] w-screen  text-black   bg-[#F7F8FC] flex flex-col gap-[3vw]' id='award'>
      <div className='md:w-[76%] xl:w-[50%] w-[90%] text-[#354962]   mx-auto fonts-text italic text-[20px] py-[0vw]'>
        <div className='flex items-center md:gap-[3vw] gap-[2vw]  xl:text-[25px]'>
          <div className='nowrap md:text-[2vw] text-[4.5vw]'>Sponsored by</div>
          <div className='overflow-hidden xl:w-[35vw] md:w-[50vw] w-[55vw]'>
            <div
              className='flex gap-[6vw]'
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
                  width="120vw"
                  height="120vw"
                  style={{ flexShrink: 0 }} // Prevent image from shrinking
                />
              ))}
            </div>
          </div>

        </div>
      </div>
      <div className="w-[86%]  mx-auto mt-[3vw] flex flex-col gap-[6vw]">
        <div className="fonts-text   italic text-center text-[56px] text-[#354962]">Grand Prize</div>
        <div className="flex items-center justify-center gap-[4vw]">
          <div className="">
            <div className="border-2 rounded-[20px] border-opacity-[0.2] relative border-[#919BC8] w-[27vw]">
              <img src="/assets/Images/2ndplaceaward.svg" alt="Silverolgo" className="absolute -top-8  -right-8" />
              <div className="p-2 rounded-[20px] bg-gray-100">
                <div className="bg-gradient-to-t from-[#979799] via-bg-gray-400 to-[#FBFCFF] h-[31vw] text-black rounded-[20px] border-2">
                  <div className="w-[80%] mx-auto my-[2rem]">
                    <div className="flex flex-col gap-[2vw]">
                      <div className="text-[24.56px] fonts-text italic font-light">2nd place</div>
                      <div className="flex flex-col gap-[1.3vw]">
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
                  <div className="flex flex-col gap-[2vw]">
                      <div className="text-[24.56px] fonts-text italic text-[#854D02] font-light">1st  place</div>
                      <div className="flex flex-col gap-[1.3vw]">
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
                  <div className="flex flex-col gap-[2vw]">
                      <div className="text-[24.56px] fonts-text italic font-light">3rd place</div>
                      <div className="flex flex-col gap-[1.3vw]">
                        <div className=" fonts-text italic text-[24.6px]">NGN 1,000,000</div>
                        <div className="text-[#324154] italic fonts-text">What’s included?</div>
                      </div>
                      <div className="flex flex-col gap-3">
                        {/* <div className="flex gap-[1vw] items-center">
                          <FaStar />
                          <div>
                            Free internship program at
                            Kora
                          </div>
                        </div> */}
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