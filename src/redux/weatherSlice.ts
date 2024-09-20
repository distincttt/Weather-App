import {
   buildCreateSlice,
   asyncThunkCreator,
   PayloadAction,
} from "@reduxjs/toolkit";

import { fetchWeatherApi } from "../api/weatherApi";
import { Weather, WeatherResponse } from "../types/types";

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
            // console.log(action.payload);
            state.weather = {
               image: `/src/images/${action.payload.weather[0].main}.png`,
               temperature: action.payload.main.temp,
               description: action.payload.weather[0].description,
               humidity: action.payload.main.humidity,
               wind: action.payload.wind.speed,
            };
         },
         rejected: (state, action: PayloadAction<WeatherResponse>) => {
            console.log(action.payload);
         },
      }),
   }),
});

export const { fetchWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
