import styled from "styled-components";

export const Wrapper = styled.div`
  & {
    height: auto;
    width: auto;
    padding: 0.25rem;
    background: transparent;
    cursor: pointer;
  }

  &:hover {
    color: ${props => props.theme.font.hoverColor};
  }
`;
