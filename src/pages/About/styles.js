import styled from "styled-components";

export const TextContainer = styled.div`
  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 5rem;
    letter-spacing: 0.3rem;
    word-spacing: 0.7rem;
    color: ${props => props.theme.font.colorBold};
  }

  p {
  }
`;
