import styled from "styled-components";
import media from "../../Globals/mediaQueries";

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
  overflow: hidden;

  & > :first-child {
    transform: skewX(12deg);
  }

  @media (max-width: ${media.width.tablet}) {
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

  @media (max-width: ${media.width.tablet}) {
    transform: translateX(-50%) skewX(0deg);
  }

  a {
    text-decoration: none;
    width: 100%;
    display: inline-block;
    height: 100%;
    padding: 0.1em 1em 0 1em;
  }
`;
