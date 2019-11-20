import styled from "styled-components";
import theme from "../../Globals/theme";
import mediaQuery from "../../Globals/mediaQueries";

export const Container = styled.div`
  padding: 0 calc(${theme.sidebar.width} + 3rem) 0 3rem;
  font-size: 1.8rem;

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
  float: left;
  margin: 0 1.5rem 1.5rem 0rem;
  outline: 4px solid ${props => props.theme.colorBold};
  transform: scale(0.9);
  outline-offset: 0.75rem;
  box-shadow: 0 1rem 1.25rem 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.4s, outline 0.4s;

  &:hover {
    transform: scale(1);
    outline-color: transparent;
    outline-width: 8px;
    box-shadow: 0 1rem 1.25rem 0 rgba(0, 0, 0, 0.2);
  }
`;

/*
export const ImageContainer = styled.div`
  height: 60rem;
  width: 100%;
  @media (max-width: ${mediaQuery.width.pc.smaller}) {
    width: auto;
    margin: 0 -2rem 0 -2rem;
  }
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: auto;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 5px;
`;
*/
