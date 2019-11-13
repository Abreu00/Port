import styled from "styled-components";

export const Btn = styled.button`
  background: transparent;
  font-family: inherit;
  border: none;
  cursor: pointer;
  font-size: 1em;
  color: ${props =>
    props.danger ? props.theme.color.danger : props.theme.font.colorBold};
  font-weight: bold;
  padding: 0.25em 1em 0 1em;
  border-bottom: 1px solid
    ${props =>
      props.danger ? props.theme.color.danger : props.theme.font.colorBold};
  transition: all 0.2s;
  position: relative;
  outline: 0;

  &::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    background: ${props =>
      props.danger ? props.theme.color.danger : props.theme.font.colorBold};
    color: #eee;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
  }

  &:active {
    box-shadow: none;
  }
`;
