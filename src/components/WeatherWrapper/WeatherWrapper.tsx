import styled from "styled-components";
import { useEffect } from "react";

import Search from "../Search/Search";
import Main from "../Main/Main";
import Info from "../Info/Info";

import { useAppDispatch } from "../../types/hooks";
import { fetchWeather } from "../../redux/weatherSlice";

const WeatherContainer = styled.div`
   position: relative;
   width: 400px;
   height: 555px;
   background: rgba(255, 255, 255, 0.1);
   backdrop-filter: blur(30px);
   border: 2px solid rgba(255, 255, 255, 0.2);
   border-radius: 16px;
   padding: 20px;
   color: #fff;
`;

const WeatherWrapper = (): JSX.Element => {
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(fetchWeather());
   }, [dispatch]);
   return (
      <WeatherContainer>
         <Search />
         <Main />
         <Info />
      </WeatherContainer>
   );
};

export default WeatherWrapper;
