import styled from "styled-components";
import media from "../../Globals/mediaQueries";

export const Container = styled.header`
  height: ${props => props.theme.header.height};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-size: 1.7rem;

  nav,
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  a {
    cursor: pointer;
    display: inline-block;
    width: auto;
    padding: 0.25rem;
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.font.colorBold};
    }
  }

  @media (max-width: ${media.width.tablet}) {
    & div {
      padding-left: 15%;
    }
  }

  @media (max-width: ${media.width.pc.smaller}) {
    & > :nth-child(2) {
      display: none;
    }

    & {
      text-align: right;
      padding: 0 2rem;
    }
    & nav {
      align-items: flex-end;
    }
  }
`;

export const Heading = styled.h2`
  flex: 1;
  color: ${props => props.theme.font.colorBold};
  font-size: 6rem;
  display: flex;
  align-items: center;
  font-family: "Courgette", cursive;
  transform: rotate(-12deg) translateY(-3rem);
  text-shadow: 1rem 0.5rem 0.5rem rgba(33, 33, 33, 0.2);
  cursor: default;
`;

export const Langs = styled.div`
  position: absolute;
  top: 1rem;
  right: 0;
  font-size: 1.4rem;

  & span {
    display: inline-block;
    cursor: pointer;
    margin-right: 1.5rem;
    padding: 0.5rem;
  }

  & span:hover {
    color: ${props => props.theme.font.colorBold};
  }
`;
