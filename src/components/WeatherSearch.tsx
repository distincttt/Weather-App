import styled from "styled-components";
import { useState } from "react";

import BoxIcon from "../features/BoxIcon";
import { fetchWeather } from "../redux/weatherSlice";
import { useAppDispatch } from "../types";

const WeatherSearchContainer = styled.div`
   position: relative;
   width: 100%;
   height: 55px;
   display: flex;
   align-items: center;

   input {
      position: absolute;
      width: 100%;
      height: 100%;
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.2);
      outline: none;
      border-radius: 10px;
      font-size: 22px;
      color: #fff;
      font-weight: 500;
      text-transform: uppercase;
      padding: 0 48px 0 42px;

      &::placeholder {
         color: #fff;
         text-transform: capitalize;
      }
   }

   i {
      position: absolute;
      left: 10px;
      font-size: 28px;
   }

   button {
      position: absolute;
      right: 0;
      width: 40px;
      height: 100%;
      background: transparent;
      border: none;
      outline: none;
      font-size: 28px;
      color: #fff;
      padding: 0 40px 0 5px;
      cursor: pointer;
   }
`;

const WeatherSearch = (): JSX.Element => {
   const [city, setCity] = useState("");

   const dispatch = useAppDispatch();

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value);
   };
   const onClick = () => {
      dispatch(fetchWeather(city));
   };
   return (
      <WeatherSearchContainer>
         <BoxIcon name="bx bxs-map" />
         <input
            type="text"
            placeholder="enter your location"
            onChange={handleChange}
         />
         <BoxIcon name="bx bx-search" onClick={onClick} button />
      </WeatherSearchContainer>
   );
};

export default WeatherSearch;
