import styled from "styled-components";
import theme from "../../Globals/theme";
import mediaQuery from "../../Globals/mediaQueries";

export const Container = styled.div`
  padding: 0 calc(${theme.sidebar.width} + 3rem) 0 3rem;
  font-size: 1.8rem;
  text-align: justify;

  @media (max-width: ${mediaQuery.width.pc.smaller}) {
    padding: 0 2rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: ${mediaQuery.width.pc.smaller}) {
    flex-direction: column;

    > :last-child {
      bottom: 15%;
      transform: translateY(-50%);
      position: fixed;
    }
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  padding-left: 2rem;
  text-align: left;
  font-weight: bold;
  color: ${props => props.theme.font.colorBold};

  @media (max-width: ${mediaQuery.width.pc.smaller}) {
    & {
      text-align: center;
      padding-left: 2rem;
    }
  }
`;

export const Image = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  min-height: ${props => props.minHeight};
  min-width: ${props => props.minWidth};
  float: left;
  margin: -0.6rem 1.4rem 0.4rem 0rem;
  transform: scale(0.9);
  box-shadow: 0 1rem 1.25rem 0 rgba(33, 33, 33, 0.25),
    0 0 0 -0.4rem ${props => props.theme.font.colorBold};
  border-radius: 0.5rem;
  transition: transform 0.5s, box-shadow 0.5s;
  &:hover {
    transform: scale(1);
    box-shadow: 0 1rem 1.25rem 0 rgba(33, 33, 33, 0.25), 0 0 0 1rem transparent;
  }

  @media (max-width: ${mediaQuery.width.pc.smaller}) {
    & {
      height: auto;
      width: 100vw;
      max-width: 100vw;
      margin: 0 calc(-50vw + 50%);
      margin-bottom: 2rem;
      transform: scale(1);
      object-fit: cover;
      object-position: top;
      border-radius: 0;
      float: none;
      box-shadow: none;
      box-shadow: 0 0.5rem 1.25rem 0 rgba(33, 33, 33, 0.15);
    }

    &:hover {
      transform: scale(1);
      box-shadow: 0 0.5rem 1.25rem 0 rgba(33, 33, 33, 0.1);
    }
  }
`;
