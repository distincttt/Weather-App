import { useAppSelector } from "../../shared";
import { AnimationContainer } from "../../shared/AnimationContainer";
import {
   Description,
   Image,
   Span,
   Temperature,
   WeatherContainer,
} from "./WeatherStyle";
import { useAnimation } from "../../shared/hooks/use-animation";

export const Weather = (): JSX.Element => {
   const { weather } = useAppSelector((state) => state.weatherSlice);
   const translateY = useAnimation(600);
   return (
      <WeatherContainer>
         <AnimationContainer transform={translateY}>
            <Image src={weather.image} alt="weather" />
            <Temperature id="temperature">
               {weather.temperature}
               <Span>°C</Span>
            </Temperature>
            <Description id="description">{weather.description}</Description>
         </AnimationContainer>
      </WeatherContainer>
   );
};
