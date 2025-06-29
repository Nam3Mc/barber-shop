'use client'

import { useEffect, useState } from "react"
import { Barber } from "../../types/barber.interface"
import BarberMaper from "../../utilities/barberMaper"

export default function Carusel() {
    const [barbers, setBarbers] = useState<Barber[]>([])

    useEffect(() => {
        fetch('/data/barbers.json')
        .then(res => res.json())
        .then( data => setBarbers(data))
    }, [])

  return (
    <BarberMaper barbers={barbers} />
  )
}
