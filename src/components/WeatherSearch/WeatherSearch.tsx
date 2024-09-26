import BoxIcon from "../../shared/BoxIcon";
import { Input, WeatherSearchContainer } from "./WeatherSearchStyle";
import { useSearch } from "../../shared/hooks/use-search";

export const WeatherSearch = (): JSX.Element => {
   const [handleChange, onClick] = useSearch();

   return (
      <WeatherSearchContainer>
         <BoxIcon name="bx bxs-map" />
         <Input
            type="text"
            placeholder="enter your location"
            onChange={handleChange}
         />
         <BoxIcon name="bx bx-search" onClick={onClick} button />
      </WeatherSearchContainer>
   );
};
