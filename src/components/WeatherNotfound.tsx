import { useEffect, useState } from "react";
import styled from "styled-components";

const WeatherNotFoundContainer = styled.div`
   position: relative;
   top: 0;
   left: 0;
   width: 100%;
   text-align: center;
   margin-top: 20px;
   overflow: hidden;

   img {
      width: 65%;
   }

   p {
      font-size: 22px;
      font-weight: 500;
      margin-top: 12px;
   }
`;

const AnimationContainer = styled.div<{ transform: string }>`
   transform: ${({ transform }) => transform};
   transition: transform 1s ease;
`;

const WeatherNotFound = (): JSX.Element => {
   const [translateY, setTranslateY] = useState("-100%");

   useEffect(() => {
      setTimeout(() => {
         setTranslateY("0%");
      }, 600);
   }, []);
   return (
      <WeatherNotFoundContainer>
         <AnimationContainer transform={`translateY(${translateY})`}>
            <img src="/src/images/404.png" alt="Not found" />
            <p>Oops! Location not found.</p>
         </AnimationContainer>
      </WeatherNotFoundContainer>
   );
};

export default WeatherNotFound;
