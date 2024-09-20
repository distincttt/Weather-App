import styled from "styled-components";

import Search from "../Search/Search";
import Main from "../Main/Main";
import Info from "../Info/Info";
import NotFound from "../NotFound/Notfound";

import { useAppSelector } from "../../types/hooks";

const WeatherContainer = styled.div`
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

const NotFoundContainer = styled.div`
   position: relative;
   top: 0;
   left: 0;
   width: 100%;
   text-align: center;
   margin-top: 20px;

   img {
      width: 65%;
   }

   p {
      font-size: 22px;
      font-weight: 500;
      margin-top: 12px;
   }
`;

const ContainerAnimation = styled.div`
   transform: translateY(-100%);
`;

const ContainerAnimationActive = styled.div`
   transform: translateY(0%);
   transition: transform 1s ease;
   transition-delay: "0.6s";
`;

const WeatherWrapper = (): JSX.Element => {
   const { weather, error } = useAppSelector((state) => state.weatherSlice);

   let weatherContainerHeight = "99px";
   if (weather.description) weatherContainerHeight = "555px";
   if (error) weatherContainerHeight = "400px";

   return (
      <WeatherContainer height={weatherContainerHeight}>
         <Search />
         {!error && weather.description && (
            <>
               <ContainerAnimation>
                  <Main />
               </ContainerAnimation>
               <Info />
            </>
         )}
         {error && (
            <NotFoundContainer>
               <ContainerAnimation>
                  <NotFound />
               </ContainerAnimation>
            </NotFoundContainer>
         )}
      </WeatherContainer>
   );
};

export default WeatherWrapper;
