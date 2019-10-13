import styled from "styled-components";
import media from "../../Globals/mediaQueries";

export const Container = styled.div`
  background: ${props => props.theme.color.secondary};
  color: ${props => props.theme.font.colorBold};
  height: 25rem;
  width: 75%;
  margin: 0 auto;
  margin-bottom: 8rem;
  transform: skewX(-12deg);
  box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.2);
  padding: 6rem;
  padding-left: 8.5rem; /* Make up for the translateX -2.5rem*/
  font-size: 1.7rem;
  transition: height 0.3s;
  position: relative;

  & > div {
    transform: skewX(12deg);
    height: 100%;
  }

  @media (max-width: ${media.width.small}) {
    & {
      transform: skew(0deg);
      width: 90%;
      border-radius: 4px;
    }

    & > div {
      transform: skew(0deg);
    }
  }
`;

export const Image = styled.img`
  height: 15rem;
  width: 15rem;
  background-image: url("./img/directa.png");
  background-size: cover;
  float: left;
  shape-outside: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  transform: translateX(-2.5rem);
`;

export const Textarea = styled.div`
  line-height: 1.7;

  h2 {
    font-weight: bold;
    font-size: 2rem;
    text-align: left;
  }
`;

export const ButtonWrapper = styled.span`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
`;

export const Expanded = styled.div`
  transition: all 0.2s;
  opacity: ${props => (props.visible ? 1 : 0)};
  visibility: ${props => (props.visible ? "normal" : "hidden")};
`;
