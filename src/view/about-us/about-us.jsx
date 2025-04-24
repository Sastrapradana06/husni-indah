import { AiFillInstagram } from "react-icons/ai";
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
        <p className="mt-4 uppercase tracking-[2px] font-bold">about us</p>
      </div>
      <div
        className="w-full h-max text-center   bg-violet-200 p-2 rounded-md "
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <p className="text-[.7rem] text-zinc-800 tracking-[1px] font-semibold">
          Selamat datang di web pernikahan{" "}
          <span className="text-blue-500 poppins">Midun</span> dan{" "}
          <span className="text-pink-500">Sindi</span> Temukan semua yang perlu
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
            src="/midun.jpeg"
            alt=""
            className="w-[200px] h-[200px] rounded-full m-auto object-cover "
            data-aos="flip-left"
          />
          <p
            className="capitalize sacramento text-[1.8rem]"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            Amidun Akbar
          </p>
        </div>
        <div
          className="w-full h-max text-center flex flex-col items-center gap-4 "
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <p className="text-[.8rem] text-slate-500">
            <span className="text-slate-600">Amidun Akbar</span> adalah seorang
            pengusaha muda visioner yang menekuni bidang kerajinan tangan,
            Selain itu, ia juga aktif mengembangkan usahanya di sektor alat
            berat. perusahaannya kini telah memberdayakan lebih dari 300
            karyawan.
          </p>
          <div className="w-full h-max flex justify-center gap-4">
            <a
              href="https://www.instagram.com/amidunakbar_?igsh=MWdsbzFmbWt0czM2bw=="
              aria-label="link to instagram"
              target="_blank"
            >
              <AiFillInstagram
                size={25}
                className="text-violet-500 hover:text-gray-400 duration-200"
              />
            </a>
            {/* <a
              href="https://www.youtube.com/results?search_query=delfano+charies"
              aria-label="link to youtube"
              target="_blank"
            >
              <IoLogoYoutube
                size={25}
                className="text-violet-500 hover:text-gray-400 duration-200"
              />
            </a> */}
          </div>
        </div>
      </div>
      <span className="w-full border"></span>
      <div className="w-full h-max flex flex-col items-center gap-2">
        <div className="w-full h-max flex flex-col items-center gap-2">
          <img
            src="/sindi2.jpeg"
            alt=""
            className="w-[200px] h-[200px] rounded-full m-auto object-cover"
            data-aos="flip-right"
          />
          <p
            className="capitalize sacramento text-[1.8rem]"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            Sindi Septria S.M
          </p>
        </div>
        <div
          className="w-full h-max text-center flex flex-col items-center gap-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <p className="text-[.8rem] text-slate-500">
            <span className="text-slate-600">Sindi Septria</span> adalah seorang
            wanita cerdas dan anggun, lulusan Sarjana Manajemen, Tak hanya
            berprestasi secara akademik, ia juga turut mendampingi dan
            berkontribusi dalam pengembangan usaha calon suaminya,
          </p>
          <div className="w-full h-max flex justify-center gap-4">
            <a
              href="https://www.instagram.com/sindyseptria?igsh=OHRidHpjYWJ3dDBi"
              aria-label="link to instagram"
            >
              <AiFillInstagram
                size={25}
                className="text-violet-500 hover:text-gray-400 duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
