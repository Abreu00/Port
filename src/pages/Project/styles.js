import styled from "styled-components";
import theme from "../../Globals/theme";
import mediaQuery from "../../Globals/mediaQueries";

export const Container = styled.div`
  padding: 0 calc(${theme.sidebar.width} + 3rem) 0 3rem;
  font-size: 1.8rem;
  text-align: justify;

  @media (max-width: ${mediaQuery.width.pc.smaller}) {
    padding: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  font-weight: bold;
  color: ${props => props.theme.font.colorBold};
  margin-bottom: 4.5rem;
`;

export const Image = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  float: right;
  margin: 0 0 1.6rem 1.6rem;
  transform: scale(0.9);
  box-shadow: 0 1rem 1.25rem 0 rgba(33, 33, 33, 0.25),
    0 0 0 -0.4rem ${props => props.theme.font.colorBold};
  border-radius: 0.5rem;
  transition: transform 0.5s, box-shadow 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1);
    box-shadow: 0 1rem 1.25rem 0 rgba(33, 33, 33, 0.25), 0 0 0 1rem transparent;
  }

  @media (max-width: ${mediaQuery.width.pc.smaller}) {
    & {
      height: 30rem;
      width: calc(100vw);
      margin: 0 0 2.2rem -2rem;
      transform: scale(1);
      object-fit: cover;
      object-position: top;
      border-radius: 0;
      float: none;
      box-shadow: 0 1rem 1.25rem 0 rgba(33, 33, 33, 0.25);
    }

    &:hover {
      transform: scale(1);
      box-shadow: 0 1rem 1.25rem 0 rgba(33, 33, 33, 0.25);
    }
  }
`;
