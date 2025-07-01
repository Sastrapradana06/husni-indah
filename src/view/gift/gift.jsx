export default function GiftView() {
  const handleCopy = (nomor, type) => {
    navigator.clipboard.writeText(nomor);
    alert(`Berhasil menyalin nomor ${type}`);
  };

  return (
    <section className="w-full h-max" id="gift">
      <>
        <h1
          className="text-center dancing text-[2.1rem] text-orange-100"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Berikan Hadiah
        </h1>
        <p
          className="text-center text-[.8rem] text-white mt-3"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          Doa restu Bapak/Ibu sekalian merupakan karunia yang sangat berarti
          bagi kami. Dan jika memberi merupakan ungkapan tanda kasih, Bapak/Ibu
          dapat memberi kado secara cashless. Terima kasih
        </p>
      </>
      <div className="w-full flex justify-start items-center flex-col gap-8 mt-8 mb-10">
        <div
          className="w-[95%] h-max border rounded-xl shadow-lg p-2 bg-white"
          data-aos="flip-left"
          data-aos-duration="1200"
        >
          <div className="w-full flex flex-row-reverse">
            <img src="/bca.svg" alt="bri" className=" object-cover w-[35%]" />
          </div>
          <div className="px-4 mt-3">
            <img src="/chip.png" alt="chip" className=" object-cover w-[20%]" />
            <h1>5725704957</h1>
            <p className="text-[.8rem] text-gray-500">Husni Harahap</p>
          </div>
          <button
            onClick={() => handleCopy("5725704957", "bca")}
            className="float-right mt-2 mr-1 bg-gray-200 text-gray-600 text-[.8rem] mb-1 px-3 py-1 rounded-md focus:bg-gray-300"
          >
            Copy
          </button>
        </div>
        <div
          className="w-[95%] h-max border rounded-xl shadow-lg p-2 bg-white"
          data-aos="flip-right"
          data-aos-duration="1200"
        >
          <div className="w-full flex flex-row-reverse">
            <img src="/bca.svg" alt="bri" className=" object-cover w-[35%]" />
          </div>
          <div className="px-4 mt-3">
            <img src="/chip.png" alt="chip" className=" object-cover w-[20%]" />
            <h1>8375199510</h1>
            <p className="text-[.8rem] text-gray-500">Indah Permata hati</p>
          </div>
          <button
            onClick={() => handleCopy("8375199510", "bca")}
            className="float-right mt-2 mr-1 bg-gray-200 text-gray-600 text-[.8rem] mb-1 px-3 py-1 rounded-md focus:bg-gray-300"
          >
            Copy
          </button>
        </div>
        {/* <div
          className="w-[95%] h-max border rounded-xl shadow-lg p-2"
          data-aos="flip-right"
          data-aos-duration="1200"
        >
          <div className="w-full flex flex-row-reverse">
            <img
              src="/logo-dana.png"
              alt="bri"
              className=" object-cover w-[35%]"
            />
          </div>
          <div className="px-4 mt-3">
            <img src="/chip.png" alt="chip" className=" object-cover w-[20%]" />
            <h1>082167971755</h1>
            <p className="text-[.8rem] text-gray-500">Sindi septria</p>
          </div>
          <button
            onClick={() => handleCopy("082167971755", "dana")}
            className="float-right mt-2 mr-1 bg-gray-200 text-gray-600 text-[.8rem] mb-1 px-3 py-1 rounded-md focus:bg-gray-300"
          >
            Copy
          </button>
        </div> */}
      </div>
    </section>
  );
}
