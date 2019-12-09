import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const RouterAnimation = styled.div`
  animation: ${animation} 0.4s;
`;

export default RouterAnimation;
