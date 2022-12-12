import { configureStore } from '@reduxjs/toolkit'
import aircompanyReducer from './slices/aircompany/aircompanySlice'

export const store = configureStore({
  reducer: {
    aircompany: aircompanyReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch