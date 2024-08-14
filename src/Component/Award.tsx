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
    <div className='xl:h-[59vw] md:h-[80vw] w-screen  md:pb-0 pb-[8vw]  text-black   bg-[#F7F8FC] flex flex-col gap-[3vw]' id='award'>
      <div className='md:w-[76%] xl:w-[70%] w-[97%] text-[#354962]   mx-auto fonts-text italic text-[20px] py-[0vw]'>
        <div className='flex items-center md:gap-[3vw] gap-[2vw]  xl:text-[25px]'>
          <div className='nowrap md:text-[2vw] text-[4vw] xl:text-[2.6vw] md:text-[3vw]'>Sponsored by</div>
          <div className='overflow-hidden  md:w-[50vw] w-[70vw]'>
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
                  width="100vw"
                  height="100vw"
                  style={{ flexShrink: 0 }} // Prevent image from shrinking
                />
              ))}
            </div>
          </div>

        </div>
      </div>
      <div className="xl:w-[86%] md:w-[90%]  mx-auto  md:mt-[3vw] mt-[9vw] flex flex-col gap-[15vw] md:gap-[6vw]">
        <div className="fonts-text   italic text-center md:text-[6vw] text-[8.5vw]  xl:text-[56px] text-[#354962]">Grand Prize</div>
        <div className="flex  md:flex-row flex-col items-center justify-center gap-[8vw]  md:gap-[4vw]">
          <div className="">
            <div className="border-2 rounded-[20px] border-opacity-[0.2] relative border-[#919BC8]  md:w-[28vw] w-[78vw] xl:w-[25vw]">
              <img src="/assets/Images/2ndplaceaward.svg" alt="Silverolgo" className="absolute w-[17vw]  md:w-[9vw] xl:w-[7vw]  -top-8  -right-8" />
              <div className="p-2 rounded-[20px]  bg-gray-100">
                <div className="bg-gradient-to-t from-[#979799] via-bg-gray-400 to-[#FBFCFF] md:h-[39vw] h-[70vw] xl:h-[31vw] text-black rounded-[20px] border-2">
                  <div className="w-[80%] mx-auto  my-[9vw]  md:my-[2rem]">
                    <div className="flex flex-col  justify-center md:gap-[1.5vw] gap-[3vw] xl:gap-[2vw]">
                      <div className="xl:text-[24.56px] md:text-[2.2vw] text-[4vw] fonts-text italic font-light">2nd place</div>
                      <div className="flex flex-col gap-[1.3vw]">
                        <div className=" fonts-text italic text-[6vw]  md:text-[2.4vw] xl:text-[24.6px]">NGN 2,000,000</div>
                        <div className="text-[#324154] italic fonts-text">What’s included?</div>
                      </div>
                      <div className="flex flex-col gap-4  xl:gap-3 md:gap-2">
                        <div className="flex gap-[1vw] xl:text-[1vw] md:text-[1.6vw] text-[3vw] items-center">
                          <FaStar />
                          <div>
                            Free internship program at
                            Kora
                          </div>
                        </div>
                        <div className="flex gap-[1vw] xl:text-[1vw] md:text-[1.6vw] text-[3vw] items-center">
                          <FaStar />
                          <div>
                            Lorem Ipsum donor wda qqas
                          </div>
                        </div>
                        <div className="flex gap-[1vw] xl:text-[1vw] md:text-[1.6vw] text-[3vw] items-center">
                          <FaStar />
                          <div>
                          Lorem Ipsum donor wda qqas
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
            <div className="border-2 rounded-[20px] border-opacity-[0.2] relative border-[#919BC8] md:w-[28vw] w-[78vw] xl:w-[25vw]">
              <img src="/assets/Images/1stplacelogo.svg" alt="Silverolgo" className="absolute w-[17vw]  md:w-[9vw] xl:w-[7vw]  -top-8  -right-8" />
              <div className="p-2 rounded-[20px]  bg-[#CC9F42] bg-opacity-[0.15]">
                <div className="bg-gradient-to-b from-[#CC9F4299] via-bg-[#874E0199] to-[#874E0199] md:h-[39vw] xl:h-[31vw] h-[70vw] text-black bg-opacity-[0.4] rounded-[20px] border-2">
                  <div className="w-[80%] mx-auto my-[9vw] md:my-[2rem] xl:my-[2rem]">
                    <div className="flex flex-col md:gap-[1.5vw] gap-[3vw] xl:gap-[2vw]">
                      <div className="xl:text-[24.56px] md:text-[2.2vw] text-[4vw] fonts-text italic text-[#854D02] font-light">1st  place</div>
                      <div className="flex flex-col gap-[1.3vw]">
                        <div className=" fonts-text italic md:text-[2.4vw] text-[6vw]  xl:text-[24.6px]">NGN 3,000,000</div>
                        <div className="text-[#324154] italic fonts-text">What’s included?</div>
                      </div>
                      <div className="flex flex-col gap-4  xl:gap-3 md:gap-2 ">
                        <div className="flex gap-[1vw] xl:text-[1vw] md:text-[1.6vw] text-[2.7vw] items-center">
                          <FaStar />
                          <div>
                            One on One meet with the CEO
                          </div>
                        </div>
                        <div className="flex xl:text-[1vw] md:text-[1.6vw] text-[2.7vw] gap-[1vw] items-center">
                          <FaStar />
                          <div>
                            Free internship program at
                            Kora
                          </div>
                        </div>
                        <div className="flex gap-[1vw] xl:text-[1vw] md:text-[1.6vw] text-[2.7vw] items-center">
                          <FaStar />
                          <div>
                            Lorem Ipsum donor
                          </div>
                        </div>
                        {/* <div className="flex gap-[1vw] xl:text-[1vw] md:text-[1.6vw] text-[3vw] items-center">
                          <FaStar />
                          <div>
                            Lorem Ipsum donor
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border-2 rounded-[20px] border-opacity-[0.2] relative border-[#919BC8] md:w-[28vw] w-[78vw] xl:w-[25vw]">
              <img src="/assets/Images/3rdplacelogo.svg" alt="Silverolgo" className="absolute w-[17vw] md:w-[9vw] xl:w-[7vw]   -top-8  -right-8" />
              <div className="p-2 rounded-[20px] bg-[#C2A07A] bg-opacity-[0.15]">
                <div className="bg-gradient-to-b from-[#C2A07A80]  via-bg-gray-400 to-[#61513D80]  md:h-[39vw] h-[70vw] xl:h-[31vw] text-black bg-opacity-[0.4] rounded-[20px] border-2">
                  <div className="w-[80%] mx-auto md:my-[2rem] my-[9vw]  xl:my-[2rem]">
                    <div className="flex flex-col  gap-[3vw] md:gap-[1.5vw] xl:gap-[2vw]">
                      <div className="xl:text-[24.56px] md:text-[2.2vw] fonts-text italic text-[4vw] text-black font-light">3rd  place</div>
                      <div className="flex flex-col gap-[1.3vw]">
                        <div className=" fonts-text italic md:text-[2.4vw] text-[6vw]  xl:text-[24.6px]">NGN 1,000,000</div>
                        <div className="text-[#324154] italic fonts-text">What’s included?</div>
                      </div>
                      <div className="flex flex-col xl:gap-3 gap-4 md:gap-2">
                        <div className="flex gap-[1vw] xl:text-[1vw] md:text-[1.6vw] text-[2.7vw] items-center">
                          <FaStar />
                          <div>
                            One on One meet with the CEO
                          </div>
                        </div>
                        <div className="flex xl:text-[1vw] md:text-[1.6vw] text-[2.7vw] gap-[1vw] items-center">
                          <FaStar />
                          <div>
                            Free internship program at
                            Kora
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