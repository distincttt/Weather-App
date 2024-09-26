import styled from "styled-components";

export const AnimationContainer = styled.div<{ transform: string }>`
   transform: ${({ transform }) => transform};
   transition: transform 1s ease;
`;
