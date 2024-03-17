import { useState } from "react"
import { Button } from '@mantine/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function GalleryView() {
  const [isModal, setIsModal] = useState(false)
  const [urlFoto, setUrlFoto] = useState(null)

  AOS.init({

  })

  const showModalFoto = (url) => {
    setIsModal(true)
    setUrlFoto(url)
  }

  const hideModalFoto = () => {
    setIsModal(false)
    setUrlFoto(null)
  }

  return (
    <div className="w-full h-max flex flex-col items-center gap-4 mt-4" id="gallery">
      <div className="text-center flex flex-col justify-center items-center w-full h-max">
        <img src="https://alis.vamtam.com/wp-content/uploads/2017/11/Rose-logo-2.svg" width={90} height={72} alt="" />
        <p className=' uppercase tracking-[2px]'>gallery photos</p>
      </div>
      <div className="w-full h-max border border-zinc-300 py-4 px-2 relative flex items-center flex-wrap justify-between shadow-lg shadow-gray-600" data-aos="zoom-in" data-aos-duration="1000">
        <img src="/poto3.jfif" alt="" className="w-[50%] h-[200px] object-cover filter cursor-pointer" onClick={() => showModalFoto('/poto3.jfif')} />
        <img src="/poto5.jfif" alt="" className="w-[50%] h-[200px] object-cover filter cursor-pointer" onClick={() => showModalFoto('/poto5.jfif')} />
      </div>
      <div className="w-full h-max border border-zinc-300 py-4 px-2 shadow-lg shadow-gray-500" data-aos="flip-down" data-aos-duration="1300">
        <img src="/poto4.jfif" alt="" className="w-full h-[300px] object-cover filter  cursor-pointer" onClick={() => showModalFoto('/poto4.jfif')} />
      </div>
      {isModal && (
        <div className="fixed inset-0 flex items-center justify-center  bg-[#00000046] backdrop-blur-sm text-black z-50">
          <div className="w-full h-max flex flex-col justify-center items-center gap-2">
            <Button variant="light" color="red" radius="xl" onClick={hideModalFoto}>Close</Button>
            <img src={urlFoto} alt="" className="w-[90%] h-max object-cover filter  cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  )
}