import styled, { keyframes } from "styled-components";

const fade = keyframes`
  from {
    transform: rotate(180deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
`;
const Container = styled.div`
  transform-origin: 0% 100%;
  animation: ${fade} 1s ease-out;
`;

export default Container;
