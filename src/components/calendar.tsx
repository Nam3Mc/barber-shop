import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid'
import FullCalendar, { EventClickArg } from '@fullcalendar/react'
import { useEffect, useState } from "react"
import { Appointment } from "../../types/appointment.interface"
import { barbers } from "../../data/barbers"

export default function Calendar() {

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    const appointmentsDates = barbers[0].appointments.map((app) => ({
      ...app,
      start: new Date(app.start),
      end: new Date(app.end),
    }));
    setAppointments(appointmentsDates);
  }, []);

  const handleEventClick = (info: EventClickArg) => {
    const clickedEvent = appointments.find(app => app.title === info.event.title);
    if (clickedEvent) {
      setSelectedAppointment(clickedEvent);
    }
  };

  const closeModal = () => {
    setSelectedAppointment(null);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Si haces clic directamente en el fondo (overlay), cierras el modal
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleDateClick = (info: DateClickArg) => {
  const title = prompt('Título de la nueva cita:');
  if (title) {
    const newAppointment: Appointment = {
      title,
      client: 'Nuevo Cliente', 
      start: info.date,
      end: new Date(info.date.getTime() + 30 * 60 * 1000),
    };
    setAppointments(prev => [...prev, newAppointment]);
  }
};

  return (
    <div className="bg-[url('/pictures/menu.png')] bg-fit bg-cover h-[500px] w-[400px] m-5 rounded opacity-90">
      <FullCalendar
        plugins={[
          resourceTimelinePlugin,
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin
        ]}
        initialView='dayGridDay'
        eventMinHeight={15}
        events={appointments}
        height="500px"
        selectable
        eventBackgroundColor='yellow'
        eventClick={handleEventClick}
        dateClick={handleDateClick}
      />

      {selectedAppointment && (
        <div
          onClick={handleOverlayClick}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(219, 168, 66, 0.8)',
              padding: '20px',
              borderRadius: '8px',
              minWidth: '300px',
              textAlign: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            }}
          >
            <h2>Detalles de la cita</h2>
            <p><strong>Cliente:</strong> {selectedAppointment.client}</p>
            <p><strong>Servicio:</strong> {selectedAppointment.title}</p>
            <p><strong>Inicio:</strong> {selectedAppointment.start.toString()}</p>
            <p><strong>Fin:</strong> {selectedAppointment.end.toString()}</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}
