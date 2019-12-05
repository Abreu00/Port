import styled from "styled-components";
import media from "../../Globals/mediaQueries";

export const TextContainer = styled.div`
  padding: 0 calc(${props => props.theme.sidebar.width} + 12rem) 0 12rem;
  max-width: 120rem;
  text-align: justify;
  margin: 0 auto;

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
    font-size: 2rem;
    line-height: 2.4rem;
    margin-bottom: 2rem;
  }

  @media (max-width: ${media.width.tablet.portrait}) {
    padding: 0 12rem;
  }
  @media (max-width: ${media.width.phone}) {
    padding: 0 3.5rem;
  }
`;
