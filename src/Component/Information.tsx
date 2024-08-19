
import "../Styles/Fonts.css"
import { useNavigate } from 'react-router'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Information = () => {
  const navigate = useNavigate()
  return (
    <div className='xl:h-[62vw] md:h-[65vw] overflow-x-hidden  w-screen h-[87vw] justify-center flex my-[3vw] md:my-[3vw] xl:my-[0vw]  xl:py-[0vw] justify-center items-center text-black' id='info'>
      <div className='w-[86%] mx-auto flex flex-col text-[3vw] gap-[2vw] fonts-text '>
        <div className='flex gap-[0vw] flex-col'>
          <div data-aos="fade-up" className='font-bold  text-[4vw] xl:text-[2.3vw] md:text-[2.9vw] xl:tracking-wide text-[#354962]'>Explore our exciting agenda</div>
          {/* <div className='text-[#354962] md:text-[20px]'>Tackling real challenges in emerging markets.</div> */}
        </div>
        <div className='flex flex-col items-end gap-[2vw]'>
          <div data-aos="fade-up" className=''>
            <img loading="lazy" src="/assets/Images/speakingvideoimages.png" alt="imagevideo" className='md:w-[120vw] w-full h-[42vw] xl:h-[60vh]  md:h-[36vw] ' />
          </div>
          <div >
            <button className='md:w-[23vw] xl:w-[14vw] w-[23vw] md:rounded-[7px] xl:text-[1.4vw] text-[2.5vw] md:text-[2.3vw] text-white xl:h-[3.6vw] md:h-[6.2vw] h-[7vw]  bg-[#2961ED]' onClick={() => navigate ("/Regulation")}>
              View Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
