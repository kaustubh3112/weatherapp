import React from 'react'
import { IoSearch } from "react-icons/io5";
import { useWeather } from '../Context/Weather';
const Searchbar = () => {

    const weather = useWeather();

    return (
        <div className='flex items-center relative rounded-3xl overflow-hidden'>
            <input type='text' placeholder='Search location' className='w-full py-3 px-5  pr-10 focus:outline-none'
                value={weather.search || ""}
                onChange={(e) => weather.setSearch(e.target.value)}
            />
            <button className='bg-white  py-3 px-5  absolute right-0 top-0 focus:outline-none'
                onClick={weather.fetchData}
            ><IoSearch className='w-6 h-6' /></button>
        </div>
    )
}

export default Searchbar