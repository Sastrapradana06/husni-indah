import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  AOS.init({});

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="w-[20%] h-[40px] lg:w-[7%] bg-[#0808082f] fixed z-50 top-[350px] left-0 lg:left-[30%] rounded-3xl flex justify-center items-center cursor-pointer"
      data-aos="fade-right"
    >
      <audio ref={audioRef} src="/sound.mp3" autoPlay={isPlaying} />
      <div>
        {isPlaying ? (
          <MdMusicNote onClick={togglePlayPause} size={20} fill="teal" />
        ) : (
          <MdMusicOff onClick={togglePlayPause} size={20} fill="crimson" />
        )}
      </div>
    </div>
  );
}
