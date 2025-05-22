'use client'

import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid'
import FullCalendar from '@fullcalendar/react'
import { useEffect, useState } from "react"
import { Appointment } from "../../types/appointment.interface"
import { barbers } from "../../data/barbers"

export default function Calendar() {

    const [appointments, setAppointments] = useState<Appointment[]>([])
    const a = 'dayGridDay'

    useEffect(() => {
        setAppointments(barbers[0].appointments)
    }, [])

    return (
        <div className="bg-[url('/pictures/menu.png')] bg-fit bg-cover h-[500px] w-[300px] m-5 rounded opacity-90">
            <FullCalendar
                plugins={[
                    resourceTimelinePlugin,
                    dayGridPlugin,
                    interactionPlugin,
                    timeGridPlugin]}
                headerToolbar={{
                  left: 'prev',
                  center: 'dayGridWeek,dayGridDay',
                  right: 'next'
                }}
                initialView={a}
                editable={true}
                selectable={true}
                selectMirror={true}
                weekends={true}
                events={[
                        { title: 'event 1', date: '2025-05-21' },
                        { title: 'event 2', date: '2025-05-21' }    
                    ]
                }
                height="480px"
                droppable
            />
        </div>
    )
}
