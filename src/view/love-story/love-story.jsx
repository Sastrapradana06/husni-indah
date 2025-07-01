import { Blockquote } from "@mantine/core";
// import { IoMdHeart } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiGlobeRing } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LoveStoryView() {
  AOS.init({
    once: true,
  });

  const Icon1 = () => {
    return (
      <div className="border rounded-full p-2 border-violet-600">
        <FaHandHoldingHeart size={15} className="text-red-400" />
      </div>
    );
  };

  const Icon2 = () => {
    return (
      <div className="border rounded-full p-2 border-violet-600">
        <GiGlobeRing size={15} className="text-red-400" />
      </div>
    );
  };

  // const Icon3 = () => {
  //   return (
  //     <div className="border rounded-full p-2 border-violet-600">
  //       <IoMdHeart size={15} className="text-red-400" />
  //     </div>
  //   );
  // };

  return (
    <div
      className="w-full h-max flex flex-col items-center gap-2 mt-2"
      id="story"
    >
      <div className="text-center flex flex-col items-center">
        <img
          src="https://alis.vamtam.com/wp-content/uploads/2017/11/Rose-logo.svg"
          width={90}
          height={72}
          alt=""
        />
        <p className="mt-4 uppercase tracking-[2px] font-bold">love story</p>
      </div>
      <div className="w-full h-max flex flex-col items-center ">
        <Blockquote
          color="violet"
          cite="– 2024"
          icon={<Icon1 />}
          mt="xl"
          data-aos="fade-up"
        >
          <p className="text-[.9rem] text-zinc-600 tracking-[1px]">
            Mereka bertemu dan menjalin hubungan Mengungkapkan rasa dan saling
            cinta setelah perjalanan cinta yang indah. Meraka memutuskan untuk
            mengikat janji suci dalam cinta yang tumbuh kokoh.
          </p>
        </Blockquote>
        <Blockquote
          color="violet"
          cite="– 2025"
          icon={<Icon2 />}
          mt="xl"
          data-aos="fade-up"
        >
          <p className="text-[.9rem] text-zinc-600 tracking-[1px]">
            Dalam kesetiaan dan cinta yang tak tergoyahkan ,mereka memutuskan
            untuk menikah,menjadikan komitmen abadi dalam ikatan suci
            pernikahan.
          </p>
        </Blockquote>
      </div>
    </div>
  );
}
