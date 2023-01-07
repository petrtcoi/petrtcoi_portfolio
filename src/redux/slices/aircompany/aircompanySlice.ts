import { createSlice, current } from '@reduxjs/toolkit'
import * as R from 'ramda'

import { Airplane, Client, Flight } from '../../../assets/types/database.type'
import { FetchingStatus } from './types/types'

import { fetchInitialData } from './asyncThunks/fetchInitialData'




export type AircompanyState = {
  fetchingStatus: FetchingStatus,
  clients: {
    byId: { [clientId: string]: Client },
  },
  airplanes: {
    byId: { [sirplaneId: string]: Airplane },
  },
  flights: {
    byId: { [flightId: string]: Flight },
    ids: Flight['id'][]
  },
}


const initialState: AircompanyState = {
  fetchingStatus: 'Idle',
  clients: { byId: {} },
  airplanes: { byId: {} },
  flights: { byId: {}, ids: [] }
}


export const aircompanySlice = createSlice({
  name: 'aircompany',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

builder.addCase(fetchInitialData.pending, (stateProxy, _action) => {
  const state = current(stateProxy)
  return R.set(R.lensProp('fetchingStatus'), 'Fetching', state)
})

builder.addCase(fetchInitialData.fulfilled, (stateProxy, action) => {
  const state: AircompanyState = current(stateProxy)
  return R.pipe(
    R.always(state),
    R.mergeLeft(action.payload),
    R.set(R.lensProp('fetchingStatus'), 'Success')
  )()
})

    builder.addCase(fetchInitialData.rejected, (stateProxy, action) => {
      const state = current(stateProxy)
      return R.set(R.lensProp('fetchingStatus'), 'Error', state)
    })

    // builder.addCase(fetchAllWorks.fulfilled, (state: WorksState, action) => {
    //   const _state: WorksState = current(state)
    //   return R.pipe(
    //     R.always(_state),
    //     R.mergeLeft(action.payload),
    //     R.set(R.lensPath(['onWork', onWork.fetchAllWorks()]), undefined),
    //     (data: any) => updateSuperStatusDownfall(data.rootWorkId, data),
    //   )()
    // })

    // builder.addCase(fetchAllWorks.rejected, (state: WorksState, action) => {
    //   const errorLog = logError(null, 'fetchAllWorks', action.error.message)
    //   const _state: WorksState = current(state)
    //   return R.pipe(
    //     R.always(_state),
    //     R.set(R.lensPath(['onWork', onWork.fetchAllWorks()]), undefined),
    //     R.set(R.lensPath(['errorLogs']), R.append(errorLog, _state.errorLogs)),
    //   )()
    // })
  },
})


export { fetchInitialData }
export default aircompanySlice.reducer