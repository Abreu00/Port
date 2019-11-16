import styled, { css } from "styled-components";
import media from "../../Globals/mediaQueries";

export const Expanded = styled.div`
  transition: all 0.5s;
  opacity: 0;
  visibility: hidden;
  height: 0;

  ${props =>
    props.visible &&
    css`
      & {
        opacity: 1;
        visibility: inherit;
        height: 40rem;
      }
    `}
`;

export const Container = styled.div`
  background: ${props => props.theme.color.secondary};
  color: ${props => props.theme.font.colorBold};
  min-height: 25rem;
  height: auto;
  width: 75%;
  margin: 0 auto;
  margin-bottom: 8rem;
  transform: skewX(-12deg);
  box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.2);
  padding: 6rem;
  padding-left: 8.5rem; /* Make up for the translateX -2.5rem*/
  font-size: 1.7rem;
  position: relative;

  & > :first-child {
    transform: skewX(12deg);
  }

  @media (max-width: ${media.width.pc.smaller}) {
    & {
      transform: skew(0deg);
      width: 90%;
      border-radius: 4px;
    }

    & > :first-child {
      transform: skew(0deg);
    }
  }
`;

export const Image = styled.img`
  height: 15rem;
  width: 15rem;
  background-image: url(${props => props.src});
  background-size: cover;
  float: left;
  shape-outside: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  transform: translateX(-2.5rem);

  @media (max-width: ${media.width.pc.small}) {
    & {
      height: 11rem;
      width: 11rem;
    }
  }
`;

export const Textarea = styled.div`
  line-height: 1.7;

  h2 {
    font-weight: bold;
    font-size: 2rem;
    text-align: left;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 3rem;
  transform: translateX(-50%) skewX(12deg);

  @media (max-width: ${media.width.pc.smaller}) {
    transform: translateX(-50%) skewX(0deg);
  }
`;
