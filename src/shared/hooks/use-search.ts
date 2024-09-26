import { useState } from "react";
import { useAppDispatch } from "./redux-hooks";
import { fetchWeather } from "../../redux";

export const useSearch = (): [
   React.ChangeEventHandler<HTMLInputElement>,
   (e: React.MouseEvent<HTMLButtonElement>) => void
] => {
   const [city, setCity] = useState("");

   const dispatch = useAppDispatch();

   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setCity(e.target.value);
   };
   const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(fetchWeather(city));
   };

   return [handleChange, onClick];
};
