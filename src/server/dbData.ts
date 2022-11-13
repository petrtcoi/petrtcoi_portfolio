import * as clients from './dataset/clients.json'
import * as flights from './dataset/flights.json'
import * as airplanes from './dataset/airplanes.json'
import { Airplane, Client, Flight } from '../assets/types/database.type'

const dbData = {
    clients: clients as unknown as Client[],
    flights: flights as unknown as Flight[],
    airplanes: airplanes as unknown as Airplane[]
}

export default dbData