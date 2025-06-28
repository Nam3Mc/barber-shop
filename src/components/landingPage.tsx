'use client'

import { UnifrakturCook } from 'next/font/google'
import ButtonUI from './UI/button'

const unifraktur = UnifrakturCook({
  subsets: ['latin'],
  weight: '700',
})

export default function LadingPage() {

  return (
    <div>
      <div className='flex '>

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
        className='w-[50%]'
        />

      </div>

      <div className='bg-white text-black text-center -mt-28 relative h-160'>
        
        <h1 className=' p-24' > BARBERS</h1>

      </div>

    </div>
  )



}
