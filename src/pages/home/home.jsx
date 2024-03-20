
import NavbarComponent from "../../components/navbar";
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import AboutUsView from '../../view/about-us/about-us';
import LoveStoryView from '../../view/love-story/love-story';
import EventsView from '../../view/events/events';
import GalleryView from '../../view/gallery/gallery';
import FooterView from '../../view/footer/footer';
import MusicPlayer from '../../components/music-player';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  AOS.init({
    once: true,
  })

  return (
    <div className="w-full h-max flex justify-center items-center" id='home'>
      <NavbarComponent />
      <MusicPlayer />
      <div className="w-[90%] h-max  mt-[110px] flex flex-col justify-center items-center gap-6" >
        <div className="w-full h-max border border-zinc-300 py-4 px-2 relative" data-aos="fade-down" data-aos-duration="800">
          <Carousel
            withIndicators
            height={200}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            <Carousel.Slide>
              <img src="/poto1.jfif" alt="" className="w-full h-[300px] object-cover filter" />
            </Carousel.Slide>
            <Carousel.Slide>
              <img src="/poto2.jfif" alt="" className="w-full h-[300px] object-cover filter" />
            </Carousel.Slide>
          </Carousel>
        </div>
        <AboutUsView />
        <LoveStoryView />
        <EventsView />
        <GalleryView />
        <FooterView />
      </div>
    </div>
  )
}