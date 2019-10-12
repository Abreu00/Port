import styled from "styled-components";

export const Btn = styled.button`
  background: transparent;
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

  &:hover {
    background: ${props =>
      props.danger ? props.theme.color.danger : props.theme.font.colorBold};
    color: #eee;
    transform: translateY(-2px);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: translate(0);
    box-shadow: none;
  }
`;
