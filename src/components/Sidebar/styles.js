import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  padding: 22rem 3rem 0 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.5rem;

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
