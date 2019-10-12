import styled from "styled-components";
import media from "../../Globals/mediaQueries";

export const Container = styled.div`
  background: #eeeeee;
  color: ${props => props.theme.font.colorBold};
  height: 250px;
  width: 75%;
  margin: 0 auto;
  margin-bottom: 8rem;
  transform: skewX(-12deg);
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.4);
  padding: 6rem;
  padding-left: 8.5rem; /* Make up for the translateX -2.5rem*/
  font-size: 1.7rem;

  & > div {
    transform: skewX(12deg);
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
  }
`;
