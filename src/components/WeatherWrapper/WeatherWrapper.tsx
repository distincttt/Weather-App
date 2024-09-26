import { WeatherSearch } from "../WeatherSearch";
import { Weather } from "../Weather";
import { WeatherInfo } from "../WeatherInfo";
import { WeatherNotFound } from "../WeatherNotfound";

import { WeatherWrapperContainer } from "./WeatherWrapperStyle";
import { useWeather } from "../../shared";

export const WeatherWrapper = (): JSX.Element => {
   const [weather, error, loading, weatherContainerHeight] = useWeather();

   return (
      <WeatherWrapperContainer height={weatherContainerHeight}>
         <WeatherSearch />
         {!error && weather.description && !loading && (
            <>
               <Weather />
               <WeatherInfo />
            </>
         )}
         {error && <WeatherNotFound />}
      </WeatherWrapperContainer>
   );
};
