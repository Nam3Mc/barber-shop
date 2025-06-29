import { Barber } from "../../types/barber.interface";

interface BarberCardProps {
  barber: Barber
}

export default function BarberCard({ barber }: BarberCardProps) {
  return (
    <div className="text-black h-160 w-60 m-5">
      <div>
        <div className="border-3 border-gray-600/90">
            <a href={barber.name}>
                <img 
                    src={barber.photo} 
                    alt={barber.name} 
                    className="w-60 h-60 border border-white bg-black/90 hover:bg-white hover:-mt-1 hover:h-70 hover:-ml-1 hover:absolute hover:border-black "
                    />
            </a>
        </div>
        <h1 className="text-3xl p-2">{barber.name}</h1>
        <h2 className="text-[16px] p-2">{barber.introduction}</h2>
      </div>
    </div>
  )
}
