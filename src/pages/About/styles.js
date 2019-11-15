import styled from "styled-components";
import media from "../../Globals/mediaQueries";

export const TextContainer = styled.div`
  padding: 0 calc(${props => props.theme.sidebar.width} + 12rem) 0 12rem;

  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 5rem;
    letter-spacing: 0.3rem;
    word-spacing: 0.7rem;
    color: ${props => props.theme.font.colorBold};
    margin-bottom: 2rem;
  }

  p {
    text-align: justify;
    font-size: 2rem;
    line-height: 2.4rem;
    margin-bottom: 2rem;
  }

  @media (max-width: ${media.width.tablet}) {
    & {
      padding: 0 calc(${props => props.theme.sidebar.width} + 4rem) 0 4rem;
    }
  }

  @media (max-width: ${media.width.pc.smaller}) {
    & {
      padding: 0 5rem;
    }
  }
`;
