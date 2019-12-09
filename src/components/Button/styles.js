import styled, { keyframes } from "styled-components";
import media from "../../Globals/mediaQueries";

const hoverAnimation = keyframes`

  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: scale(1.5);
  }

`;

export const Btn = styled.div`
  background-image: linear-gradient(to right, #005c97, #363795);
  background-size: 200%;
  color: ${props => props.theme.color.primary};
  border-radius: 0.5rem;
  box-shadow: 0 1rem 1.5rem rgba(33, 33, 33, 0.2);
  position: relative;
  z-index: 2;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    opacity: 1;
    background-image: inherit;
    background-size: inherit;
    border-radius: inherit;
    transition: transform 0.4s;
  }

  &:hover::after {
    animation: ${hoverAnimation} 0.4s ease 80ms;
  }

  @media (max-width: ${media.width.phone}) {
    &:hover::after {
      animation: none;
    }
  }
`;
