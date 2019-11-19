import styled from "styled-components";

export const Animations = styled.div`
  transform-origin: 0% 100%;
  .fade-enter {
    opacity: 0.01;
    visibility: hidden;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: all 900ms linear;
    transform: scaleY(1);
    visibility: initial;
  }

  .fade-exit {
    opacity: 1;
    transform: scaleY(1);
  }

  .fade-exit.fade-exit-active {
    transition-delay: 900ms;
    opacity: 0.01;
    transition: all 900ms linear;
  }
`;
