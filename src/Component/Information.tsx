
import "../Styles/Fonts.css"
import { useNavigate } from 'react-router'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Information = () => {
  const navigate = useNavigate()
  return (
    <div className='xl:h-[62vw] md:h-[62vw] overflow-x-hidden  w-screen h-[43vh] justify-center flex my-[3vw] md:my-[3vw] xl:my-[0vw]  xl:py-[0vw] justify-center items-center text-black' id='info'>
      <div className='w-[86%] mx-auto flex flex-col text-[3vw] gap-[2vw] fonts-text '>
        <div className='flex gap-[0vw] flex-col'>
          <div data-aos="fade-up" className='font-bold xl:tracking-wide text-[#354962]'>Explore our exciting agenda</div>
          {/* <div className='text-[#354962] md:text-[20px]'>Tackling real challenges in emerging markets.</div> */}
        </div>
        <div className='flex flex-col items-end gap-[1vw]'>
          <div data-aos="fade-up" className=''>
            <img loading="lazy" src="/assets/Images/speakingvideoimages.png" alt="imagevideo" className='md:w-[120vw] w-full h-[45vw] xl:h-[60vh]  md:h-[32vw] ' />
          </div>
          <div >
            <button className='md:w-[14vw] w-[21vw] md:rounded-[7px]  text-[2vw] md:text-[1.3vw] text-white xl:h-[3.6vw] md:h-[4.2vw] h-[6vw]  bg-[#2961ED]' onClick={() => navigate ("/Regulation")}>
              View Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
