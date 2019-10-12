import styled from "styled-components";

export const Message = styled.div`
  position: absolute;
  font-size: 1.6rem;
  left: 0.4rem;
  font-weight: bold;
  color: ${props => props.theme.font.colorBold};
  transform: scale(${props => (props.show ? 1 : 0)});
  transition: transform 0.3s;
`;

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  padding-left: 1.2rem;
  padding-top: ${props => props.theme.header.height};
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 2.5rem;
  width: ${props => props.theme.sidebar.width};
  top: 0;
  left: 0;

  & > * {
    margin-bottom: 5rem;
  }
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0;
  opacity: ${props => (props.showArrow ? 1 : 0)};
  visibility: ${props => (props.showArrow ? "normal" : "hidden")};
  transition: all 0.25s;
`;
