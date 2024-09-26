import styled from "styled-components";

export const WeatherNotFoundContainer = styled.div`
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

export const Image = styled.img`
   width: 65%;
`;

export const P = styled.p`
   font-size: 22px;
   font-weight: 500;
   margin-top: 12px;
`;
