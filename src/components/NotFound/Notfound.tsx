import styled from "styled-components";

const NotFoundContainer = styled.div``;

const NotFound = () => {
   return (
      <NotFoundContainer>
         <img src="/src/images/404.png" alt="Not found" />
         <p>Oops! Location not found.</p>
      </NotFoundContainer>
   );
};

export default NotFound;
