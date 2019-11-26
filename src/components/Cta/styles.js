import styled from "styled-components";
import mediaQuery from "../../Globals/mediaQueries";

export const Container = styled.a`
  text-decoration: none;
  font-family: inherit;
  cursor: pointer;
  text-align: center;
  padding: 2rem 0;
  border-radius: 4px;
  border: 0.2rem solid ${props => props.theme.font.color};
  padding: 0.5em 1em;
  box-shadow: 0 0.5rem 1rem rgba(33, 33, 33, 0.2);
  transition: all 0.2s ease-in;

  &:hover {
    color: #f0f0f0;
    background: ${props => props.theme.font.color};
  }

  svg {
    position: relative;
    top: 0.2em;
    left: -0.2em;
  }

  @media (max-width: ${mediaQuery.width.pc.small}) {
    color: #f0f0f0;
    background: ${props => props.theme.font.color};
  }
`;
