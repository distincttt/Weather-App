import {
   buildCreateSlice,
   asyncThunkCreator,
   PayloadAction,
} from "@reduxjs/toolkit";

import { fetchWeatherApi } from "../api/weatherApi";
import { Weather, WeatherResponse } from "../types";

const createAppSlice = buildCreateSlice({
   creators: { asyncThunk: asyncThunkCreator },
});

type InitialState = {
   weather: Weather;
   error: boolean;
};

const initialState: InitialState = {
   weather: {
      image: "",
      temperature: 0,
      description: "",
      humidity: 0,
      wind: 0,
   },
   error: false,
};

const weatherSlice = createAppSlice({
   name: "weather",
   initialState,
   reducers: (create) => ({
      fetchWeather: create.asyncThunk(fetchWeatherApi, {
         fulfilled: (state, action: PayloadAction<WeatherResponse>) => {
            state.error = false;
            state.weather = {
               image: `/src/images/${action.payload.weather[0].main}.png`,
               temperature: Math.floor(action.payload.main.temp),
               description: action.payload.weather[0].description,
               humidity: action.payload.main.humidity,
               wind: action.payload.wind.speed,
            };
         },
         rejected: (state) => {
            state.error = true;
         },
      }),
   }),
});

export const { fetchWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
