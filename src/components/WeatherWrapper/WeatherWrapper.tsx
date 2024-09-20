import styled from "styled-components";

import Search from "../Search/Search";
import Main from "../Main/Main";
import Info from "../Info/Info";

import { useAppSelector } from "../../types/hooks";
import NotFound from "../NotFound/Notfound";

const WeatherContainer = styled.div`
   position: relative;
   width: 400px;
   // height: 555px;
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

   let weatherContainerHeight;
   if (weather.description) weatherContainerHeight = { height: "555px" };
   if (error) weatherContainerHeight = { height: "400px" };

   return (
      <WeatherContainer style={weatherContainerHeight}>
         <Search />
         {!error && weather.description && (
            <>
               <Main />
               <Info />
            </>
         )}
         {error && <NotFound />}
      </WeatherContainer>
   );
};

export default WeatherWrapper;
