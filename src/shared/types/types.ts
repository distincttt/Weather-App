export type Weather = {
   image: string;
   temperature: number;
   description: string;
   humidity: number;
   wind: number;
};

export type WeatherResponse = {
   weather: [
      {
         main: string;
         description: string;
      }
   ];
   main: {
      temp: number;
      humidity: number;
   };
   wind: {
      speed: number;
   };
};
