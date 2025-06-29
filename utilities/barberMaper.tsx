import BarberCard from "@/components/barbercard"
import { Barber } from "../types/barber.interface"
import IndexChanger from "./indexChanger"
import ButtonUI from "@/components/UI/button"

interface BarberMaperProps {
  barbers: Barber[]
}

export default function BarberMaper({ barbers }: BarberMaperProps) {
  const { visibleItems, handleNext, handlePrev, canGoNext, canGoPrev } = IndexChanger(barbers)

  return (
    <div className='bg-yellow-50 text-black text-center -mt-28 h-full'>
      <div className="pt-">
        <img 
          src="http://localhost:3000/pictures/border.png" 
          alt="border"
          className="w-full h-16 m-2"
        />
        <h1> <span className='text-5xl'>BARBERS </span></h1>
      </div>
      <div className="flex items-center gap-4 p-5">
        <div className="-mt-92 bg-black/90 text-white hover:bg-white hover:text-black transition-colors">
          <ButtonUI 
            onClick={handlePrev} 
            disable={!canGoPrev}>
              Prev
          </ButtonUI>
        </div>
        <div className="flex gap-4 overflow-hidden">
          {visibleItems.map((barber, index) => (
            <BarberCard key={index} barber={barber} />
          ))}
        </div>
        <div className="-mt-92 bg-black/90 text-white hover:bg-white hover:text-black transition-colors">
          <ButtonUI 
            onClick={handleNext} 
            disable={!canGoNext}>
              Next
          </ButtonUI>
        </div>
      </div>
    </div>
  )
}
