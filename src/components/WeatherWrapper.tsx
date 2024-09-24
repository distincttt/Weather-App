import styled from "styled-components";

import Search from "./WeatherSearch";
import Main from "./Weather";
import Info from "./WeatherInfo";
import NotFound from "./WeatherNotfound";

import { useAppSelector } from "../types/hooks";

const WeatherWrapperContainer = styled.div<{ height: string }>`
   position: relative;
   width: 400px;
   height: ${({ height }) => height};
   background: rgba(255, 255, 255, 0.1);
   backdrop-filter: blur(30px);
   border: 2px solid rgba(255, 255, 255, 0.2);
   border-radius: 16px;
   padding: 20px;
   color: #fff;
   transition: height 0.6s ease;
`;

const WeatherWrapper = (): JSX.Element => {
   const { weather, error } = useAppSelector((state) => state.weatherSlice);

   let weatherContainerHeight = "99px";
   if (weather.description) weatherContainerHeight = "555px";
   if (error) weatherContainerHeight = "400px";

   return (
      <WeatherWrapperContainer height={weatherContainerHeight}>
         <Search />
         {!error && weather.description && (
            <>
               <Main />
               <Info />
            </>
         )}
         {error && <NotFound />}
      </WeatherWrapperContainer>
   );
};

export default WeatherWrapper;
