'use client'

import Barbers from "@/components/barber"
import Calendar from "@/components/calendar"
import NavBar from "@/components/navBar"

export default function Home() {
  return (
  <div className="bg-[url('/pictures/bg.jpeg')] bg-cover bg-center min-h-screen w-screen flex flex-col overflow-hidden">
      <NavBar />
      <div className="flex">
        <Barbers />
        < Calendar />
      </div>
    </div>
  )
}
