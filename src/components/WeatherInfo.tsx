import { useEffect, useState } from "react";
import styled from "styled-components";

import BoxIcon from "../features/BoxIcon";
import { useAppSelector } from "../types";

const WeatherInfoContainer = styled.div`
   position: absolute;
   bottom: 40px;
   left: 0;
   width: 100%;
   padding: 0 20px;
   display: flex;
   overflow: hidden;

   i {
      font-size: 56px;
      margin-right: 10px;
   }

   span {
      display: inline-block;
      font-size: 22px;
      font-weight: 500;
   }

   p {
      font-size: 14px;
      font-weight: 500;
   }
`;

const Humidity = styled.div<{ transform: string }>`
   display: flex;
   align-items: center;
   width: 50%;
   padding-left: 20px;
   justify-content: flex-start;
   transform: ${({ transform }) => transform};
   transition: transform 1s ease;
`;

const Wind = styled.div<{ transform: string }>`
   display: flex;
   align-items: center;
   width: 50%;
   padding-right: 20px;
   justify-content: flex-end;
   transform: ${({ transform }) => transform};
   transition: transform 1s ease;
`;

const WeatherInfo = (): JSX.Element => {
   const { weather } = useAppSelector((state) => state.weatherSlice);

   const [translateY, setTranslateY] = useState("-100%");

   useEffect(() => {
      setTimeout(() => {
         setTranslateY("0%");
      }, 1200);
   }, []);
   return (
      <WeatherInfoContainer>
         <Humidity transform={`translateY(${translateY})`}>
            <BoxIcon name="bx bx-water" />
            <div>
               <span>{weather.humidity}%</span>
               <p>Humidity</p>
            </div>
         </Humidity>
         <Wind transform={`translateY(${translateY})`}>
            <BoxIcon name="bx bx-wind" />
            <div>
               <span>{weather.wind}Km/h</span>
               <p>Wind Speed</p>
            </div>
         </Wind>
      </WeatherInfoContainer>
   );
};

export default WeatherInfo;
