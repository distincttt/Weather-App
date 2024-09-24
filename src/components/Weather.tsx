import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useAppSelector } from "../types";

const WeatherContainer = styled.div`
   text-align: center;
   margin: 40px 0;
   overflow: hidden;

   img {
      width: 60%;
   }

   #temperature {
      position: relative;
      font-size: 64px;
      line-height: 1;
      font-weight: 700;
      margin: 20px 0 6px -30px;

      span {
         position: absolute;
         font-size: 24px;
         margin-left: 4px;
      }
   }

   #description {
      font-size: 22px;
      font-weight: 500;
      text-transform: capitalize;
   }
`;

const AnimationContainer = styled.div<{ transform: string }>`
   transform: ${({ transform }) => transform};
   transition: transform 1s ease;
`;

const Weather = (): JSX.Element => {
   const { weather } = useAppSelector((state) => state.weatherSlice);
   const initialTranslateY = useRef("translateY(-100%)");
   const [translateY, setTranslateY] = useState<string>(
      initialTranslateY.current
   );
   console.log(translateY);

   useEffect(() => {
      console.log("render");
      setTimeout(() => {
         setTranslateY("translateY(0%)");
      }, 600);
      return setTranslateY(initialTranslateY.current);
   }, [weather]);
   return (
      <WeatherContainer>
         <AnimationContainer transform={translateY}>
            <img src={weather.image} alt="weather" />
            <p id="temperature">
               {weather.temperature}
               <span>°C</span>
            </p>
            <p id="description">{weather.description}</p>
         </AnimationContainer>
      </WeatherContainer>
   );
};

export default Weather;
