import styled from "styled-components";

export const Container = styled.header`
  height: ${props => props.theme.header.height};
  width: 60%;
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
`;

export const Heading = styled.h2`
  flex: 1;
  color: ${props => props.theme.font.colorBold};
  font-size: 6rem;
  display: flex;
  align-items: center;
`;
