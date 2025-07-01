import { useNavigate } from "react-router-dom";
import "./App.css";

import { BsEnvelopeOpenHeart } from "react-icons/bs";
import { useLocation } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nama = queryParams.get("nama");

  return (
    <>
      <div className="w-full min-h-[100vh] max-h-max img poppins">
        <div className="absolute top-0 left-0 w-full h-full z-30 bg-black/50 flex flex-col justify-center items-center">
          <div className="w-full h-[450px] flex flex-col justify-between items-center">
            <div>
              <h1 className="text-center text-white playfair text-[1rem]">
                The Wedding Of
              </h1>
              <p className="text-center text-white playfair text-[2.5rem] mt-2">
                Husni & Indah
              </p>
            </div>
            <div>
              <h1 className="text-center text-white text-[.8rem]">
                Kpd Bpk/Ibu/Saudara/I
              </h1>
              <p className="text-center text-white dancing text-[2.2rem] mt-2 capitalize">
                {nama ? nama : "You"} & Patner
              </p>
              <button
                className="w-[180px] h-max py-2.5 bg-white text-black  mt-4 rounded-2xl flex items-start justify-center gap-2 hover:bg-black hover:text-white transition-all duration-300"
                onClick={() => navigate("/home")}
              >
                <BsEnvelopeOpenHeart size={17} />
                <p className="text-[.8rem]">Buka Undangan</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
