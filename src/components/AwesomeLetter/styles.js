import styled, { keyframes } from "styled-components";

const letterAnimation = keyframes`
  0% {
      transform: scale(1, 1);
    }
    30% {
      transform: scale(1.25, 0.75);
    }
    40% {
      transform: scale(0.75, 1.25);
    }
    50% {
      transform: scale(1.15, 0.85);
    }
    65% {
      transform: scale(0.95, 1.05);
    }
    75% {
      transform: scale(1.05, 0.95);
    }
    100% {
      transform: scale3d(1, 1);
    }

`;

export const Container = styled.span`
  animation-name: ${props => (props.running ? letterAnimation : "")};
  animation-duration: 1s;
  animation-timing-function: ease-in;
  line-height: 1em;
`;
