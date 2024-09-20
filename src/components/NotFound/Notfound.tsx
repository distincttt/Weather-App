import styled from "styled-components";

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

const NotFound = () => {
   return (
      <NotFoundContainer>
         <img src="/src/images/404.png" alt="Not found" />
         <p>Oops! Location not found.</p>
      </NotFoundContainer>
   );
};

export default NotFound;
