import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaWater, FaWind } from "react-icons/fa";
import './index.css'


const WeatherContainer = () => {
  

  let api_key = '2f44ddc7602e454b0c53f30908e6d0c0'

  const Search = async () => {
    const element = document.getElementById('cityInput');
  
    if (element.value === '') {
      return null;
    }
  
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=metric&appid=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();
    const image = document.getElementById('weather-image')
    const humidity = document.getElementsByClassName('text-humadity');
    const wind = document.getElementsByClassName('text-wind');
    const temprature = document.getElementsByClassName('temprature');
    const location = document.getElementsByClassName('location');
    const description = document.getElementsByClassName('description');
  
    humidity[0].innerHTML = data.main.humidity+' %';
    wind[0].innerHTML = data.wind.speed+' KM/H';
    temprature[0].innerHTML = data.main.temp+' °C';
    location[0].innerHTML = data.name;
    description[0].innerHTML = data.weather[0].main;


    switch(data.weather[0].main){
      case 'Clear': image.src = '../src/assets/Clear.png'
      break;
      case 'Rain': image.src = '../src/assets/Raining.png'
      break;
      case 'Snow': image.src = '../src/assets/Snow.png'
      break;
      case 'Clouds': image.src = '../src/assets/Cloud.png'
      break;
      case 'Mist': image.src = '../src/assets/Mist.png'
      break;
      
    }
  
    console.log('Hello');
  };
  

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      Search();
    }
  };

  return (
    <>
    <div className='flex items-center justify-center h-[100vh] m-0 p-0 box-border font-lato bg-hero bg-cover bg-center'>
    <div className=" container backdrop-blur-xl	relative w-[400px] h-[555px] bg-container border border-solid rounded-2xl p-5 text-white border-container">
        <div className="search-box relative w-full h-[55px] flex items-center">
            <i className='absolute left-3'><CiLocationOn size='25px' color='black'/></i>
            <input onKeyDown={handleKeyDown} id='cityInput' className=' absolute w-full h-full bg-container outline-none rounded-xl text-base text-white font-medium placeholder:text-lg' type="text" placeholder='Search any city' />
            <button onClick={Search} className='cursor-pointer absolute right-0 w-[40px] h-full bg-transparent border-none outline-none px-0 pr-[40px] pl-[5px]'><IoIosSearch size='27px'/></button>
        </div>
        <div className="weather-box relative text-center mt-[25px] mr-5">
  <div className="box">
    <div className="info-weather">
      <div className="weather flex flex-col items-center text-[65px]">
        <img id='weather-image' className='w-[60%] justify-center flex' src='' alt="" />
        <p className='temprature relative  font-bold'><span></span></p>
        <p className='location text-2xl font-bold capitalize'></p>
        <p className='description text-lg capitalize'></p>
      </div>
    </div>
  </div>
</div>

<div className="weather-details absolute left-10 bottom-[40px] pt-0 pr-[50px] w-full flex gap-1">
  <div className="humadity flex items-center w-[50%]">
    <i className='mr-2'><FaWater size='40px' /></i>
    <div className="text ">
      <span className='text-humadity inline-block font-medium'>0%</span>
      <p className='text-sm'>Humidity</p>
    </div> 
  </div>

  <div className="wind flex items-center w-[50%]">
    <i className='mr-2'><FaWind size='40px'/></i>
    <div className="text ">
      <span className='text-wind inline-block font-medium' >23<span> KM/H</span></span>
      <p className='text-sm'>Wind Speed</p>
    </div> 
  </div>
</div>
    </div>
    </div>
    </>
  )
}

export default WeatherContainer