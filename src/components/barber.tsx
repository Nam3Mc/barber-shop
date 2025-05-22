'use client'

import { UnifrakturCook } from 'next/font/google'
import { useEffect, useState } from "react"
import { Barber } from "../../types/barber.interface"
import { barbers } from "../../data/barbers"

const unifraktur = UnifrakturCook({
  subsets: ['latin'],
  weight: '700',
})

export default function Barbers() {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [barbersList, setBarbersList] = useState<Barber[]>([])
  const [barber, setBarber] = useState<Barber>()
  const [picture, setPicture] = useState<string>('')

  useEffect(() => {
    setBarbersList(barbers)
    setBarber(barbers[0])
    setPicture(barbers[0]?.photo || '')
  }, [])

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % barbersList.length
    setCurrentIndex(newIndex)
    setBarber(barbersList[newIndex])
    setPicture(barbersList[newIndex].photo)
  }

  const handleBack = () => {
    const newIndex = (currentIndex - 1 + barbersList.length) % barbersList.length
    setCurrentIndex(newIndex)
    setBarber(barbersList[newIndex])
    setPicture(barbersList[newIndex].photo)
  }

  return (
    <div className="flex text-center text-[60px] text-yellow-300/80 m-5">

        <div className="bg-[url('/pictures/bg-2.png')] bg-fit bg-contain bg-no-repeat bg-center">
            <div className="flex items-center justify-center h-full">
                <img src={picture} alt='' className='h-[600px] '/>
            </div>
            <div className='flex justify-center -mt-24'>

                <button className="w-24 bg-[url('/pictures/bg-barber.png')] bg-fit bg-contain bg-no-repeat bg-center" onClick={handleBack}>
                  <img src="pictures/izquierda.png" alt="left" />
                </button>
                <h1 className={`${unifraktur.className} w-[400px] text-center bg-black/80 rounded-full`}>
                    {barber?.name}
                </h1>
                 <button className="w-24 bg-[url('/pictures/bg-barber.png')] bg-cover bg-contain bg-no-repeat bg-center" onClick={handleNext}>
                    <img
                       src="pictures/izquierda.png"
                       alt="right"
                       style={{ transform: 'rotate(180deg)' }}
                     />
                 </button>

            </div>
        </div>
    </div>
  )
}
