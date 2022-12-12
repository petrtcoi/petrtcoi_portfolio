import { createAsyncThunk } from "@reduxjs/toolkit"
import * as R from 'ramda'
import { Airplane, Client, Flight } from "../../../../assets/types/database.type"
import { fetchEntity } from "../../../../server/api"

import { AircompanyState } from "../aircompanySlice"

type FetchedInitialState = Pick<AircompanyState, 'airplanes' | 'clients' | 'flights'>




export const fetchInitialData = createAsyncThunk<Promise<Pick<AircompanyState, 'airplanes' | 'clients' | 'flights'>>>(
  'aircompany/fetchInitialData',
  async () => {

    const clients = await getEntityByIdsData<Client>('clients')
    const airplanes = await getEntityByIdsData<Airplane>('airplanes')
    const flights = await getEntityByIdsData<Flight>('flights')

    console.log('data: ', flights.data)

    return {
      clients: { byId: clients.byId },
      airplanes: { byId: airplanes.byId },
      flights: {
        byId: flights.byId,
        ids: R.pipe(
          R.always(flights.data),
          R.sortBy(R.pipe(
            // @ts-ignore
            R.prop('date'), R.split('.'), R.reverse, R.join('-'), Date.parse)
          ),
          R.map(x => x.id)
        )()
      },
    }
  }
)



const getEntityByIdsData = async <T>(entity: string): Promise<{ byId: { [key: string]: T }, data: T[] }> => {
  const { data } = await fetchEntity<T>(entity)

  return {
    // @ts-ignore
    byId: R.indexBy(R.prop('id'), data),
    data
  }
}

