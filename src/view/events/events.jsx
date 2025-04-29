import AOS from "aos";
import "aos/dist/aos.css";
import { IoLocation } from "react-icons/io5";

export default function EventsView() {
  AOS.init({
    once: true,
  });

  return (
    <div
      className="w-full h-max flex flex-col items-center gap-4 mt-2"
      id="events"
    >
      <div className="text-center flex flex-col justify-center items-center w-full h-max">
        <img
          src="https://alis.vamtam.com/wp-content/uploads/2017/11/rings.svg"
          width={90}
          height={72}
          alt=""
        />
        <img
          src="/bismillah.png"
          className="w-[300px] h-[80px] object-cover"
          alt=""
          data-aos="zoom-in"
        />
        <p className="text-gray-500 text-[.8rem] mb-4">
          Atas Rahmat Tuhan Yang Maha Esa, kami bermaksud mengundang Anda di
          acara Kami. Merupakan suatu kehormatan dan kebahagiaan bagi kami
          sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan
          doa restu pada kami.
        </p>
        <p
          className=" uppercase tracking-[2px] font-bold text-[1.1rem]"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          save the date
        </p>
      </div>
      <p
        className="sacramento font-medium text-[1.8rem]"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        3 . Mei . 2025
      </p>
      <div
        className="w-full h-max text-center relative"
        data-aos="flip-left"
        data-aos-duration="1200"
      >
        <img
          src="/bgname.png"
          alt=""
          className=" w-full h-[250px] object-cover"
        />
        <div className="w-full h-[180px] absolute top-[30px] flex justify-center items-center flex-col">
          <p className="sacramento font-medium text-[2rem]">Midun</p>
          <p className="satisfy font-medium text-[1.8rem]">&</p>
          <p className="sacramento font-medium text-[2rem]">Sindi</p>
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
      <div className="w-full h-max mt-3 flex flex-col gap-4">
        <div className="w-full ">
          <h1 className="playfair text-[1.3rem]">AKAD NIKAH</h1>
          <p className="text-[.8rem] coklat">Jum`at, 3 Mei 2025 pukul 10.00</p>
          <p className="text-[.7rem] coklat">Rumah Sindi</p>
        </div>
        <div className="w-full ">
          <h1 className="playfair text-[1.3rem] uppercase">
            Resepsi Pernikahan
          </h1>
          <p className="text-[.8rem] coklat">Sabtu, 4 Mei 2025</p>
          <p className="text-[.7rem] coklat">Rumah Sindi</p>
        </div>
        <div className="w-full h-max flex justify-center items-center gap-3 flex-col mt-2 mb-4">
          <a href="https://maps.app.goo.gl/Z5wfCeA7qsYhmC6E9" target="_blank">
            <button className="px-4 py-2 flex justify-center items-center gap-3 bg-gray-900 rounded-md hover:shadow-lg hover:bg-gray-800">
              <IoLocation className="text-green-500" size={20} />
              <p className="text-white">Temukan Lokasi</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
