import { Appointment } from "./appointment.interface";
import { Client } from "./client.interface";

export interface Barber {
  name: string;
  specialty: string;
  photo: string; 
  appointments: Appointment[];
  clients: Client[];
  gallery: string[]; 
}