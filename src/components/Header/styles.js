import styled from "styled-components";
import media from "../../Globals/mediaQueries";

export const Container = styled.header`
  height: ${props => props.theme.header.height};
  width: 100%;
  display: flex;
  justify-content: flex-start;

  ul {
    flex: 1;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    height: 100%;
    font-size: 1.7rem;
  }

  @media (max-width: ${media.width.pc.smaller}) {
    & > :nth-child(2) {
      display: none;
    }

    & {
      text-align: right;
      padding-right: 2rem;
    }
  }
`;

export const Heading = styled.h2`
  flex: 1;
  color: ${props => props.theme.font.colorBold};
  font-size: 6rem;
  display: flex;
  align-items: center;
  transform: rotate(-20deg);
  text-shadow: 1rem 0.5rem 0.25rem rgba(0, 0, 0, 0.2);
`;

export const Langs = styled.div`
  position: absolute;
  top: 1rem;
  right: 0;
  font-size: 1.4em;

  & > div {
    display: inline-block;
    cursor: pointer;
    margin-right: 1.5rem;
    padding: 0.5rem;
  }

  & > div:hover {
    color: ${props => props.theme.font.colorBold};
  }
`;
