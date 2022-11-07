import { Guid } from "guid-typescript"

export type AirplaneModel = 'Boeing 737' | 'Boeing 777' | 'Airbus A380'
export type Airplane = {
    id: Guid
    model: AirplaneModel
    manufacturingYear: number
}



type SeatNo = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
type SeatRow = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
export type Seat = `${SeatNo}${SeatRow}`

export type Flight = {
    id: Guid
    airplane: Guid
    passengers: {
        clientId: Guid
        seat: Seat
    }[]
    date: string
    cityFrom: string
    cityTo: string
    durationHours: number
}


export type Gender = 'Male' | 'Female'
export type Address = {
    country: string
    city: string
    address: string
    zip: string
}
export type FoodPreference = 'vegan' | 'gluten_free' | 'lactose_free'
export type Client = {
    id: Guid
    firstName: string
    lastName: string
    email: string
    gender: Gender
    address: Address
    preferences: {
        food?: FoodPreference
    }
}