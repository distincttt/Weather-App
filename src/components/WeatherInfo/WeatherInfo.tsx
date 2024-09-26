import { useAppSelector } from "../../shared/types";
import { WeatherInfoContainer } from "./WeatherInfoStyle";
import { HumidityWind } from "./HumidityWind";
import { useAnimation } from "../../shared/hooks/use-animation";

export const WeatherInfo = (): JSX.Element => {
   const { weather } = useAppSelector((state) => state.weatherSlice);
   const translateY = useAnimation(1200);
   const infos = [
      {
         name: "Humidity",
         translateY,
         boxIconName: "bx bx-water",
         humidityWind: `${weather.humidity}%`,
         padding: "0 0 0 20px",
         flex: "flex-start",
      },
      {
         name: "Wind Speed",
         translateY,
         boxIconName: "bx bx-wind",
         humidityWind: `${weather.wind}Km/h`,
         padding: "0 20px 0 0",
         flex: "flex-end",
      },
   ];

   return (
      <WeatherInfoContainer>
         {infos.map((info, i) => (
            <HumidityWind
               key={i}
               name={info.name}
               translateY={info.translateY}
               boxIconName={info.boxIconName}
               humidityWind={info.humidityWind}
               padding={info.padding}
               flex={info.flex}
            />
         ))}
      </WeatherInfoContainer>
   );
};
