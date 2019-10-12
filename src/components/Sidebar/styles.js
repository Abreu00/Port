import styled from "styled-components";

export const Message = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${props => props.theme.font.colorBold};
  transition: transform 0.3s;
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%) scale(${props => (props.show ? 1 : 0)});
`;

export const MessageWrapper = styled.div`
  position: relative;
`;

export const Container = styled.div`
  height: 100%;
  padding-top: ${props => props.theme.header.height};
  font-size: 2.5rem;
  width: ${props => props.theme.sidebar.width};

  @media (max-width: 800px) {
    width: 100%;
    height: 3rem;
    padding-top: 0;
  }
  div {
    text-align: center;
  }
`;

export const Fixed = styled.div`
  height: 100vh;
  position: fixed;
  width: ${props => props.theme.sidebar.width};
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 5rem;
  }

  @media (max-width: 800px) {
    position: static;
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Bottom = styled.div`
  opacity: ${props => (props.showArrow ? 1 : 0)};
  visibility: ${props => (props.showArrow ? "normal" : "hidden")};
  transition: all 0.25s;
`;
