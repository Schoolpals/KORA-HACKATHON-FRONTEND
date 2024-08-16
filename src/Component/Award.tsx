import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Award = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: false,
    });
  }, []);
  const imageArray = [
    { src: "/assets/Images/Fincralogo.svg", id: 1, alt: "FrincaImg" },
    { src: "/assets/Images/Piggyvestlogo.svg", id: 2, alt: "PiggyVestImg" },
    { src: "/assets/Images/Quidaxlogo.svg", id: 3, alt: "QuidaxImg" },
    { src: "/assets/Images/Divestlgo.svg", id: 4, alt: "DivestImg" },
  ];
  const doubledImageArray = [...imageArray, ...imageArray]
  // useEffect(() => {
  //   const scrollInterval = setInterval(() => {
  //     setScrollPosition((prevPosition) => {
  //       const newPosition = prevPosition + 200;
  //       if (newPosition >= imageArray.length * 230) {
  //         return 0;
  //       }
  //       return newPosition;
  //     });
  //   }, 2000);

  //   return () => clearInterval(scrollInterval);
  // }, [imageArray.length]);


  return (
    <div className='xl:h-[59vw] md:h-[80vw] w-screen  md:pb-0 pb-[8vw]  text-black   bg-white flex flex-col gap-[3vw]' id='award'>
      <div className="xl:w-[86%] md:w-[90%]  mx-auto  md:mt-[3vw] mt-[9vw] flex flex-col gap-[9vw] md:gap-[6vw]">
        <div data-aos="zoom-out" className="fonts-text    text-center md:text-[6vw] text-[7vw]  xl:text-[56px] text-[#354962]">Grand Awards</div>
        <div className="flex  md:flex-row flex-col items-center justify-center gap-[7vw]  md:gap-[4vw]">
          <div className="">
            <div className="border-2 rounded-[20px] border-opacity-[0.2] relative border-[#919BC8]   md:w-[28vw] w-[65vw] xl:w-[25vw]" data-aos="flip-left">
              <img src="/assets/Images/2ndplaceaward.svg" alt="Silverolgo" className="absolute w-[15vw]  md:w-[9vw] xl:w-[7vw]  -top-8  -right-8" />
              <div className="p-1 rounded-[20px]  bg-gray-100">
                <div className="bg-gradient-to-t from-[#979799] via-bg-gray-400 to-[#FBFCFF] md:h-[39vw] h-[65vw] xl:h-[29vw] text-black rounded-[20px] border-2">
                  <div className="w-[80%] mx-auto  my-[9vw]  md:my-[2rem]">
                    <div className="flex flex-col  justify-center md:gap-[1.5vw] gap-[2vw] xl:gap-[2vw]">
                      <div className="xl:text-[24.56px] md:text-[2.2vw] text-[4vw] fonts-text font-light">2nd place</div>
                      <div className="flex flex-col gap-[1.3vw]">
                        <div className=" fonts-text text-[6vw]  md:text-[2.4vw] xl:text-[24.6px]">NGN 2,000,000</div>
                        <div className="text-[#324154] md:text-[1.5vw] text-[3vw] xl:text-[1vw] fonts-text">What’s included?</div>
                      </div>
                      <div className="flex flex-col gap-4  xl:gap-3 md:gap-2">
                        <div className="flex gap-[1vw] xl:text-[1vw] md:text-[1.35vw] text-[2.7vw] items-center">
                          <FaStar />
                          <div>
                            Free internship program at
                            Kora
                          </div>
                        </div>
                        <div className="flex gap-[1vw] xl:text-[1vw] md:text-[1.35vw] text-[2.7vw] items-center">
                          <FaStar />
                          <div>
                            Lorem Ipsum donor wda qqas
                          </div>
                        </div>
                        <div className="flex gap-[1vw] xl:text-[1vw] md:text-[1.35vw] text-[2.7vw] items-center">
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
            <div className="border-2 rounded-[20px] border-opacity-[0.2] relative border-[#919BC8] md:w-[28vw] w-[65vw] xl:w-[25vw]" data-aos="flip-down">
              <img src="/assets/Images/1stplacelogo.svg" alt="Silverolgo" className="absolute w-[15vw]  md:w-[9vw] xl:w-[7vw]  -top-8  -right-8" />
              <div className="p-1 rounded-[20px]  bg-[#CC9F42] bg-opacity-[0.15]">
                <div className="bg-gradient-to-b from-[#CC9F4299] via-bg-[#874E0199] to-[#874E0199] md:h-[39vw] xl:h-[29vw] h-[65vw] text-black bg-opacity-[0.4] rounded-[20px] border-2">
                  <div className="w-[80%] mx-auto my-[9vw] md:my-[2rem] xl:my-[2rem]">
                    <div className="flex flex-col md:gap-[1.5vw] gap-[2vw] xl:gap-[2vw]">
                      <div className="xl:text-[24.56px] md:text-[2.2vw] text-[4vw] fonts-text  text-[#854D02] font-light">1st  place</div>
                      <div className="flex flex-col gap-[1.3vw]">
                        <div className=" fonts-text  md:text-[2.4vw] text-[6vw]  xl:text-[24.6px]">NGN 3,000,000</div>
                        <div className="text-[#324154]  md:text-[1.5vw] text-[3vw] xl:text-[1vw] fonts-text">What’s included?</div>
                      </div>
                      <div className="flex flex-col gap-4  xl:gap-3 md:gap-2 ">
                        <div className="flex gap-[1vw] xl:text-[1vw] md:text-[1.35vw] text-[2.7vw] items-center">
                          <FaStar />
                          <div>
                            One on One meet with the CEO
                          </div>
                        </div>
                        <div className="flex xl:text-[1vw] md:text-[1.35vw] text-[2.7vw] gap-[1vw] items-center">
                          <FaStar />
                          <div>
                            Free internship program at
                            Kora
                          </div>
                        </div>
                        <div className="flex gap-[1vw] xl:text-[1vw] md:text-[1.35vw] text-[2.7vw] items-center">
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
            <div className="border-2 rounded-[20px] border-opacity-[0.2] relative border-[#919BC8] md:w-[28vw] w-[65vw] xl:w-[25vw]" data-aos="flip-right">
              <img src="/assets/Images/3rdplacelogo.svg" alt="Silverolgo" className="absolute w-[15vw] md:w-[9vw] xl:w-[7vw]   -top-8  -right-8" />
              <div className="p-1 rounded-[20px] bg-[#C2A07A] bg-opacity-[0.15]">
                <div className="bg-gradient-to-b from-[#C2A07A80]  via-bg-gray-400 to-[#61513D80]  md:h-[39vw] h-[65vw] xl:h-[29vw] text-black bg-opacity-[0.4] rounded-[20px] border-2">
                  <div className="w-[80%] mx-auto md:my-[2rem] my-[9vw]  xl:my-[2rem]">
                    <div className="flex flex-col  gap-[2vw] md:gap-[1.5vw] xl:gap-[2vw]">
                      <div className="xl:text-[24.56px] md:text-[2.2vw] fonts-text  text-[4vw] text-black font-light">3rd  place</div>
                      <div className="flex flex-col gap-[1.3vw]">
                        <div className=" fonts-text  md:text-[2.4vw] text-[6vw]  xl:text-[24.6px]">NGN 1,000,000</div>
                        <div className="text-[#324154]  md:text-[1.5vw] text-[3vw] xl:text-[1vw] fonts-text">What’s included?</div>
                      </div>
                      <div className="flex flex-col xl:gap-3 gap-4 md:gap-2">
                        <div className="flex gap-[1vw] xl:text-[1vw] md:text-[1.35vw] text-[2.7vw] items-center">
                          <FaStar />
                          <div>
                            One on One meet with the CEO
                          </div>
                        </div>
                        <div className="flex xl:text-[1vw] md:text-[1.35vw] text-[2.7vw] gap-[1vw] items-center">
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
        <div data-aos="fade-up" className="flex w-[97%] relative xl:-top-[3vw]  md:-top-[2vw]  mx-auto gap-[1vw]">
          <FaStar className="text-[#354962]"/>
          <div className="xl:w-[50%] md:w-[67%] font-thin  text-center md:text-left fonts-text text-[#354962]">Registration for our prestigious challenge opens 19th of August and closes 21st August, don't miss your chance to claim the crown. This is your moment to shine and make your mark.</div>
        </div>
      </div>

    </div>
  );
};