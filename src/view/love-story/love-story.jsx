import { Blockquote } from '@mantine/core';
import { IoMdHeart } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function LoveStoryView() {

  AOS.init({

  })

  const Icon1 = () => {
    return (
      <div className="border rounded-full p-2 border-violet-600">
        <FaHandHoldingHeart size={15} className='text-red-400' />
      </div>
    )
  }

  const Icon2 = () => {
    return (
      <div className="border rounded-full p-2 border-violet-600">
        <BsFillArrowThroughHeartFill size={15} className='text-red-400' />
      </div>
    )
  }

  const Icon3 = () => {
    return (
      <div className="border rounded-full p-2 border-violet-600">
        <IoMdHeart size={15} className='text-red-400' />
      </div>
    )
  }

  return (
    <div className="w-full h-max flex flex-col items-center gap-2 mt-2" id="story">
      <div className="text-center flex flex-col items-center">
        <img src="https://alis.vamtam.com/wp-content/uploads/2017/11/Rose-logo.svg" width={90} height={72} alt="" />
        <p className='mt-4 uppercase tracking-[2px]'>love story</p>
      </div>
      <div className="w-full h-max flex flex-col items-center ">
        <Blockquote color="violet" cite="– 2019" icon={<Icon1 />} mt="xl" data-aos="fade-up">
          <p className='text-[.9rem] text-zinc-600 tracking-[1px]'>Mereka bertemu, mata bersinar, senyum mengungkapkan rasa, dan lalu jatuh cinta dalam kehangatan dan kebahagiaan.</p>
        </Blockquote>
        <Blockquote color="violet" cite="– 2021" icon={<Icon2 />} mt="xl" data-aos="fade-up">
          <p className='text-[.9rem] text-zinc-600 tracking-[1px]'>Setelah perjalanan cinta yang indah, mereka memutuskan untuk bertunangan, mengikat janji dalam cinta yang tumbuh dan kokoh.</p>
        </Blockquote>
        <Blockquote color="violet" cite="– 2022" icon={<Icon3 />} mt="xl" data-aos="fade-up">
          <p className='text-[.9rem] text-zinc-600 tracking-[1px]'>Dalam kesetiaan dan cinta yang tak tergoyahkan, mereka memutuskan untuk menikah, menjadikan komitmen abadi dalam ikatan suci pernikahan..</p>
        </Blockquote>
      </div>
    </div>
  )
}