import { buildCreateSlice, asyncThunkCreator, PayloadAction } from '@reduxjs/toolkit'

import { fetchWeatherApi } from '../api'
import { Weather, WeatherResponse } from '../shared'

const createAppSlice = buildCreateSlice({
   creators: { asyncThunk: asyncThunkCreator },
})

type InitialState = {
   weather: Weather
   error: boolean
   loading: boolean
}

const initialState: InitialState = {
   weather: {
      image: '',
      temperature: 0,
      description: '',
      humidity: 0,
      wind: 0,
   },
   error: false,
   loading: false,
}

const weatherSlice = createAppSlice({
   name: 'weather',
   initialState,
   reducers: (create) => ({
      fetchWeather: create.asyncThunk(fetchWeatherApi, {
         pending: (state) => {
            state.loading = true
         },
         fulfilled: (state, action: PayloadAction<WeatherResponse>) => {
            state.loading = false
            state.error = false
            state.weather = {
               image: `/images/${action.payload.weather[0].main}.png`,
               temperature: Math.floor(action.payload.main.temp),
               description: action.payload.weather[0].description,
               humidity: action.payload.main.humidity,
               wind: action.payload.wind.speed,
            }
         },
         rejected: (state) => {
            state.loading = false
            state.error = true
         },
      }),
   }),
})

export const { fetchWeather } = weatherSlice.actions

export default weatherSlice.reducer
