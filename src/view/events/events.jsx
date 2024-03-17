import AOS from 'aos';
import 'aos/dist/aos.css';

export default function EventsView() {
  AOS.init({

  })

  return (
    <div className="w-full h-max flex flex-col items-center gap-4 mt-2" id="events">
      <div className="text-center flex flex-col justify-center items-center w-full h-max">
        <img src="https://alis.vamtam.com/wp-content/uploads/2017/11/rings.svg" width={90} height={72} alt="" />
        <img src="/bismillah.png" className='w-[300px] h-[80px] object-cover' alt="" data-aos="zoom-in" />
        <p className=' uppercase tracking-[2px] font-bold' data-aos="fade-down" data-aos-duration="800">save the date</p>
      </div>
      <p className="sacramento font-medium text-[1.8rem]" data-aos="fade-down" data-aos-duration="1000">21 . April . 2024</p>
      <div className="w-full h-max text-center relative" data-aos="flip-left" data-aos-duration="1200">
        <img src="/bgname.png" alt="" className=" w-full h-[250px] object-cover" />
        <div className="w-full h-[180px] absolute top-[30px] flex justify-center items-center flex-col">
          <p className="sacramento font-medium text-[2rem]">Delfano</p>
          <p className="satisfy font-medium text-[1.8rem]">&</p>
          <p className="sacramento font-medium text-[2rem]">Namira</p>
        </div>
      </div>
      <div className="w-full h-max flex flex-col justify-center items-center">
        <div className="text-center">
          <p className="uppercase tracking-[2px]">Turut Mengundang</p>
        </div>
        <div className="text-center text w-[90%] h-max border border-gray-400 py-1 rounded-lg bg-[#F6F3FE]">
          <p className="satisfy text-[1.2rem]">You</p>
          <p>&</p>
          <p className="satisfy text-[1.2rem]">Partner</p>
        </div>
      </div>
    </div>
  )
}
