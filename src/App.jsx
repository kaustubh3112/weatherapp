import './App.css'
import mainBg from "./Assets/Images/sky.jpg"
import Card from './Components/card'
import { useWeather } from './Context/Weather';


import Searchbar from './Components/searchbar';
import { useEffect } from 'react';

function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchCurrentLocationData()
  }, [])

  return (
    <div className='w-full h-screen main-bg ' style={{ backgroundImage: `url(${mainBg})` }}>

      <div className='w-full h-screen flex items-center justify-center flex-col'>
        <Card>
          <Searchbar />
          <div className='text-center w-full py-5 '>
            <img src={weather?.data?.current?.condition?.icon} className='mb-3 mx-auto' />
            <h6 className='mb-3'> {weather?.data?.current?.condition?.text}</h6>
            <h1 className='text-black font-bold text-5xl'> {weather?.data?.current?.temp_c}<sup>o</sup>C </h1>
          </div>
          <div className='text-center w-full py-5 '>
            <h4 className='text-black font-bold text-3xl'>{weather?.data?.location?.name}</h4>
            <h5>{weather?.data?.location?.region}</h5>
            <h6> {weather?.data?.location?.country}</h6>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default App
