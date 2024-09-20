import styled from "styled-components";

import { useAppSelector } from "../../types/hooks";

const WeatherContainer = styled.div`
   text-align: center;
   margin: 40px 0;

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

const Main = () => {
   const { weather } = useAppSelector((state) => state.weatherSlice);
   return (
      <WeatherContainer>
         <img src={weather.image} alt="weather" />
         <p id="temperature">
            {weather.temperature}
            <span>°C</span>
         </p>
         <p id="description">{weather.description}</p>
      </WeatherContainer>
   );
};

export default Main;
