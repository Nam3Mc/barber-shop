'use client'

import Carusel from './carrusel'
import ButtonUI from './UI/button'

export default function LandingPage() {

  return (
    <div>
      <div className='flex'>
        <div className='w-[50%] text-center flex justify-center items-center'>
          <div>

          <h1 className='text-5xl m-10 text-justify w-72'>
            PREMIUM HAIRCUTS & SHAVES
          </h1>
          <ButtonUI children="RESERVE NOW" />
          </div>
        </div>
        <img 
        src="http://localhost:3000/pictures/landing.png" 
        alt="Landing Picture" 
        className='w-[50%] -z-20'
        />
      </div>
      <Carusel />
    </div>
  )



}
