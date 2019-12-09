import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  text-align: center;
  border-radius: 0.4rem;
  border: 0.2rem solid ${props => props.theme.font.color};
  box-shadow: 0 0.5rem 1rem rgba(33, 33, 33, 0.2);
  transition: all 0.2s ease-in;

  a {
    font-family: inherit;
    height: 100%;
    width: 100%;
    text-decoration: none;
    display: inline-block;
    padding: 0.5em 1em;
  }

  &:hover {
    color: #f0f0f0;
    background: ${props => props.theme.font.color};
  }

  svg {
    position: relative;
    top: 0.2em;
    left: -0.2em;
  }
`;

export const Disabled = styled(Container)`
  cursor: default;
  box-shadow: none;
  border: none;
  background: ${props => props.theme.color.secondary};
  color: #bdbdbd;
  padding: 0.5em 1em;

  &:hover {
    color: inherit;
    background: inherit;
    background: ${props => props.theme.color.secondary};
    color: #bdbdbd;
  }
`;
