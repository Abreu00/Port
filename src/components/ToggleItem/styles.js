import styled from "styled-components";

export const Item = styled.li`
  & {
    width: auto;
    color: ${props =>
      props.selected ? props.theme.font.colorBold : "inherit"};
  }

  &:hover {
    color: ${props => props.theme.font.colorBold};
  }

  span {
    cursor: pointer;
    display: inline-block;
    padding: 0.25rem;

    &::after {
      content: "";
      display: inline-block;
      border-radius: 50%;
      width: 0.5em;
      height: 0.5em;
      margin-left: 0.25em;
      background: ${props => props.theme.font.colorBold};
      transform: scale(${props => (props.selected ? 1 : 0)});
      transition: all 0.2s;
    }
  }
`;
