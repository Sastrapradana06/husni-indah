import NavbarComponent from "../../components/navbar";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import AboutUsView from "../../view/about-us/about-us";
import LoveStoryView from "../../view/love-story/love-story";
import EventsView from "../../view/events/events";
import GalleryView from "../../view/gallery/gallery";
import FooterView from "../../view/footer/footer";
import MusicPlayer from "../../components/music-player";
import AOS from "aos";
import "aos/dist/aos.css";
import GiftView from "../../view/gift/gift";

export default function HomePage() {
  const [isModal, setIsModal] = useState(false);
  const [urlFoto, setUrlFoto] = useState(null);

  const autoplay = useRef(Autoplay({ delay: 5000 }));

  AOS.init({
    once: true,
  });

  const showModalFoto = (url) => {
    if (url === false) {
      setIsModal(false);
      setUrlFoto("");
    } else {
      setIsModal(true);
      setUrlFoto(url);
    }
  };

  return (
    <div
      className="w-full h-max flex justify-center items-center poppins"
      id="home"
    >
      <NavbarComponent />
      <MusicPlayer />
      <div className="w-[90%] h-max  mt-[110px] flex flex-col justify-center items-center gap-6">
        <div
          className="w-full h-max border border-zinc-300 py-4 px-2 relative"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <Carousel
            withIndicators
            height={220}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            <Carousel.Slide>
              <img
                onClick={() => showModalFoto("/3.jpeg")}
                src="/3.jpeg"
                alt=""
                className="w-full h-[250px] object-cover filter cursor-pointer"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <img
                onClick={() => showModalFoto("/1.jpeg")}
                src="/1.jpeg"
                alt=""
                className="w-full h-[230px] object-cover filter"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <img
                onClick={() => showModalFoto("/4.jpeg")}
                src="/4.jpeg"
                alt=""
                className="w-full h-[230px] object-cover filter"
              />
            </Carousel.Slide>
          </Carousel>
        </div>
        <AboutUsView />
        <LoveStoryView />
        <EventsView />
        <GalleryView />
        <FooterView />
        <GiftView />
      </div>

      {isModal && (
        <div className="fixed inset-0 flex items-center justify-center  bg-[#00000046] backdrop-blur-sm text-black z-50">
          <div
            className="w-full h-max flex flex-col justify-center items-center gap-2"
            onClick={() => showModalFoto(false)}
          >
            <img
              src={urlFoto}
              alt=""
              className="w-[90%] h-[500px] object-cover filter  cursor-pointer rounded-md shadow-xl border-2 border-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}
