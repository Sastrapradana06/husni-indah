
import { useNavigate } from 'react-router-dom';
import './App.css'
import { Button } from '@mantine/core';

function App() {
  const navigate = useNavigate()

  return (
    <div className="w-full min-h-[100vh] max-h-max  text-black flex justify-center items-center relative" id='home'>
      <img src="/bg-white-2.jfif" alt="bg" className='w-full h-[100vh] object-cover' />
      <div className="w-[80%] h-[300px] mt-[100px]  absolute text-black flex justify-center items-center flex-col gap-2 ">
        <p className='dancing text-[2.2rem] font-medium capitalize'>Delfano charies</p>
        <p className='dancing text-[2.2rem] font-medium'>&</p>
        <p className='dancing text-[2.2rem] font-medium capitalize'>Namira Mamora</p>
        <Button
          variant="gradient" gradient={{ from: 'pink', to: 'cyan', deg: 90 }}
          onClick={() => navigate('/home')}
          className='mt-5'>Buka Undangan
        </Button>
      </div>
    </div>
  )
}

export default App
