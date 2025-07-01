// import { AiFillInstagram } from "react-icons/ai";
// import { IoLogoYoutube } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUsView() {
  AOS.init({
    once: true,
  });

  return (
    <div
      className="w-full h-max flex flex-col items-center gap-2 poppins"
      id="about"
    >
      <div className="text-center">
        <img
          src="/bunga2.png"
          className="w-[200px] h-[80px] object-cover"
          alt=""
        />
        <p className="mt-4 uppercase tracking-[2px] font-bold text-orange-100">
          about us
        </p>
      </div>
      <div
        className="w-full h-max text-center   bg-white p-2 rounded-md "
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <p className="text-[.7rem] text-zinc-800 tracking-[1px] font-semibold">
          Selamat datang di web pernikahan{" "}
          <span className="text-blue-500 poppins">Husni</span> dan{" "}
          <span className="text-pink-500">Indah</span> Temukan semua yang perlu
          Anda ketahui tentang pernikahan kami, dari jadwal acara hingga
          informasi lokasi.
        </p>
      </div>
      <div className="w-full h-max ">
        <img
          src="/tangkai1.png"
          alt=""
          className="w-[150px] h-[50px] object-cover m-auto"
        />
      </div>
      <div className="w-full h-max flex flex-col items-center gap-2">
        <div className="w-full h-max flex flex-col items-center gap-2">
          <img
            src="/husni.jpeg"
            alt=""
            className="w-[200px] h-[200px] rounded-full m-auto object-cover "
            data-aos="flip-left"
          />
          <p
            className="capitalize sacramento text-[1.8rem] text-white"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            Husni Harahap
          </p>
        </div>
        <div
          className="w-full h-max text-center flex flex-col items-center gap-4 "
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <p className="text-[.8rem] text-slate-100">
            <span className=" text-[.9rem] playfair text-orange-300">
              Husni Harahap
            </span>{" "}
            Pria yg memiliki semangat dan wawasan luas demi membangun hidupnya
            dan berusaha menjadi sukses utk masa depan nya.
          </p>
          {/* <div className="w-full h-max flex justify-center gap-4">
            <a
              href="https://www.instagram.com/amidunakbar_?igsh=MWdsbzFmbWt0czM2bw=="
              aria-label="link to instagram"
              target="_blank"
            >
              <AiFillInstagram
                size={25}
                className="text-violet-100 hover:text-gray-400 duration-200"
              />
            </a>
            <a
              href="https://www.youtube.com/results?search_query=delfano+charies"
              aria-label="link to youtube"
              target="_blank"
            >
              <IoLogoYoutube
                size={25}
                className="text-violet-100 hover:text-gray-400 duration-200"
              />
            </a>
          </div> */}
        </div>
      </div>
      <span className="w-full border mt-6 mb-6"></span>
      <div className="w-full h-max flex flex-col items-center gap-2">
        <div className="w-full h-max flex flex-col items-center gap-2">
          <img
            src="/indah2.jpeg"
            alt=""
            className="w-[200px] h-[200px] rounded-full m-auto object-cover"
            data-aos="flip-right"
          />
          <p
            className="capitalize sacramento text-[1.8rem] text-white"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            indah permata hati
          </p>
        </div>
        <div
          className="w-full h-max text-center flex flex-col items-center gap-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <p className="text-[.8rem] text-slate-100">
            <span className=" text-[.9rem] playfair text-orange-300">
              Indah permata hati
            </span>{" "}
            Wanita yang di dikenal ambisius,cerdas ,dan berpotensi di bidang
            pekerjaan yg sedang ia jalani, teman dan keluarga melihat sosok nya
            sebagai wanita tangguh pemberani dan ,bertanggung jawab.
          </p>
          {/* <div className="w-full h-max flex justify-center gap-4">
            <a
              href="https://www.instagram.com/sindyseptria?igsh=OHRidHpjYWJ3dDBi"
              aria-label="link to instagram"
            >
              <AiFillInstagram
                size={25}
                className="text-violet-500 hover:text-gray-400 duration-200"
              />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
