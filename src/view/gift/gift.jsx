export default function GiftView() {
  return (
    <section className="w-full h-max">
      <>
        <h1 className="text-center dancing text-[2.1rem]">Berikan Hadiah</h1>
        <p className="text-center text-[.8rem] text-gray-500 mt-3">
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
    </section>
  );
}
