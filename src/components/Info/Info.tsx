import styled from "styled-components";

import BoxIcon from "../BoxIcon/BoxIcon";
import { useAppSelector } from "../../types/hooks";

const InfoContainer = styled.div`
   position: absolute;
   bottom: 40px;
   left: 0;
   width: 100%;
   padding: 0 20px;
   display: flex;

   i {
      font-size: 56px;
      margin-right: 10px;
   }

   span {
      display: inline-block;
      font-size: 22px;
      font-weight: 500;
   }

   p {
      font-size: 14px;
      font-weight: 500;
   }
`;

const Humidity = styled.div`
   display: flex;
   align-items: center;
   width: 50%;
   padding-left: 20px;
   justify-content: flex-start;
`;

const Wind = styled.div`
   display: flex;
   align-items: center;
   width: 50%;
   padding-right: 20px;
   justify-content: flex-end;
`;

const Info = () => {
   const { weather } = useAppSelector((state) => state.weatherSlice);
   return (
      <InfoContainer>
         <Humidity>
            <BoxIcon name="bx bx-water" />
            <div>
               <span>{weather.humidity}%</span>
               <p>Humidity</p>
            </div>
         </Humidity>
         <Wind>
            <BoxIcon name="bx bx-wind" />
            <div>
               <span>{weather.wind}Km/h</span>
               <p>Wind Speed</p>
            </div>
         </Wind>
      </InfoContainer>
   );
};

export default Info;
