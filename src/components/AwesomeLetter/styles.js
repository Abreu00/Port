import styled, { keyframes } from "styled-components";

const letterAnimation = keyframes`
  0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
`;

const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

`;

export const Container = styled.span`
  animation: ${props => (props.running ? letterAnimation : "")} 1s ease-in
      ${props => props.delay}s,
    ${show} 1s ease-in ${props => props.delay}s;
  line-height: 1em;
  backface-visibility: hidden;
`;
