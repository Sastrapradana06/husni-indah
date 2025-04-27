import { IoLocation } from "react-icons/io5";

export default function GiftView() {
  return (
    <section className="w-full h-max">
      <>
        <h1 className="text-center dancing text-[2rem]">Berikan Hadiah</h1>
        <p className="text-center text-[.8rem] text-gray-500">
          Doa restu Bapak/Ibu sekalian merupakan karunia yang sangat berarti
          bagi kami. Dan jika memberi merupakan ungkapan tanda kasih, Bapak/Ibu
          dapat memberi kado secara cashless. Terima kasih
        </p>
      </>
      <div className="w-full flex justify-start items-center flex-col gap-3">
        <div className="">
          <img src="/bri2.png" alt="bri" className=" object-cover" />
          <img src="/dana2.png" alt="bri" className=" object-cover" />
        </div>
      </div>
      <div className="w-full h-max flex justify-center items-center gap-3 flex-col mt-2 mb-4">
        <a href="https://maps.app.goo.gl/Z5wfCeA7qsYhmC6E9" target="_blank">
          <button className="px-4 py-2 flex justify-center items-center gap-3 bg-gray-900 rounded-md hover:shadow-lg hover:bg-gray-800">
            <IoLocation className="text-green-500" size={20} />
            <p className="text-white">Temukan Lokasi</p>
          </button>
        </a>
      </div>
    </section>
  );
}
