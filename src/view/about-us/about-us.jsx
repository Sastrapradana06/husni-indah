import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutUsView() {
  AOS.init({

  })

  return (
    <div className="w-full h-max flex flex-col items-center gap-2" id="about">
      <div className="text-center">
        <img src="/bunga2.png" className='w-[200px] h-[80px] object-cover' alt="" />
        <p className='mt-4 uppercase tracking-[2px]'>about us</p>
      </div>
      <div className="w-full h-max text-center   bg-violet-200 p-2 rounded-md " data-aos="zoom-in" data-aos-duration="1000">
        <p className='text-[.8rem] text-zinc-800 tracking-[1px]'>Selamat datang di web pernikahan Delfano dan Namira! Temukan semua yang perlu Anda ketahui tentang pernikahan kami, dari jadwal acara hingga informasi lokasi.</p>
      </div>
      <div className="w-full h-max " >
        <img src="/tangkai1.png" alt="" className='w-[150px] h-[50px] object-cover m-auto' />
      </div>
      <div className="w-full h-max flex flex-col items-center gap-2">
        <div className="w-full h-max flex flex-col items-center gap-2" >
          <img src="/fano1.jfif" alt="" className='w-[200px] h-[200px] rounded-full m-auto object-cover ' data-aos="flip-left" />
          <p className='capitalize sacramento text-[1.8rem]' data-aos="fade-down" data-aos-duration="800">Delfano Charies</p>
        </div>
        <div className="w-full h-max text-center flex flex-col items-center gap-4 " data-aos="zoom-in" data-aos-duration="1000">
          <p className='text-[.8rem] text-slate-500'>Delfano Charies adalah seorang YouTuber dengan 569 ribu subscriber, konten kekinian, dan dekripsi karakter yang santai. Dia juga seorang mualaf.</p>
          <div className="w-full h-max flex justify-center gap-4">
            <a href="https://www.instagram.com/delfanocharies/">
              <AiFillInstagram size={25} className="text-violet-500 hover:text-gray-400 duration-200" />
            </a>
            <a href="https://www.youtube.com/results?search_query=delfano+charies">
              <IoLogoYoutube size={25} className="text-violet-500 hover:text-gray-400 duration-200" />
            </a>
          </div>
        </div>
      </div>
      <span className="w-full border"></span>
      <div className="w-full h-max flex flex-col items-center gap-2">
        <div className="w-full h-max flex flex-col items-center gap-2">
          <img src="/mira2.jfif" alt="" className='w-[200px] h-[200px] rounded-full m-auto object-cover' data-aos="flip-right" />
          <p className='capitalize sacramento text-[1.8rem]' data-aos="fade-down" data-aos-duration="800">Namira Mamora</p>
        </div>
        <div className="w-full h-max text-center flex flex-col items-center gap-4" data-aos="zoom-in" data-aos-duration="1000">
          <p className='text-[.8rem] text-slate-500'>Namira Mamora, selebgram populer di Instagram dengan 300 ribu pengikut, membagikan gaya hidup, kecantikan, dan inspirasi fashion.</p>
          <div className="w-full h-max flex justify-center gap-4">
            <a href="https://www.instagram.com/namiramamora/">
              <AiFillInstagram size={25} className="text-violet-500 hover:text-gray-400 duration-200" />
            </a>
            <a href="https://www.youtube.com/results?search_query=delfano+charies">
              <IoLogoYoutube size={25} className="text-violet-500 hover:text-gray-400 duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}