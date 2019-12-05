import styled from "styled-components";
import media from "../../Globals/mediaQueries";

export const ShadowProvider = styled.div`
  filter: drop-shadow(0 0.75rem 1.5rem rgba(33, 33, 33, 0.25));
`;

export const Container = styled.div`
  background: #eee;
  color: ${props => props.theme.font.colorBold};
  min-height: 25rem;
  height: auto;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 8rem;
  clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0 100%);
  box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.2);
  padding: 6rem;
  font-size: 1.7rem;
  position: relative;

  & > :first-child {
    display: flex;
    align-items: center;
    height: 100%;
  }

  @media (max-width: ${media.width.phone}) {
    & {
      width: 90%;
      padding: 3rem;
      background-image: url(${props => props.image});
      background-size: cover;
    }

    & > :first-child {
      transform: skew(0deg);
    }
  }
`;

export const Image = styled.img`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  box-shadow: 0 0 0 1.25rem rgba(0, 92, 151, 1);
  transition: transform 0.4s;
  user-select: none;

  @media (max-width: ${media.width.tablet.portrait}) {
    width: 11rem;
    height: 11rem;
  }

  @media (max-width: ${media.width.phone}) {
    display: none;
  }
`;

export const Textarea = styled.span`
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(to right, #005c97, #363795);
  color: transparent;
  font-size: 3.5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 43.75em) {
    width: 100%;
    text-align: left;
    padding-left: 20rem;
  }

  @media (max-width: ${media.width.phone}) {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 3rem;
  transform: translateX(-50%);

  a {
    text-decoration: none;
    width: 100%;
    display: inline-block;
    height: 100%;
    padding: 0.1em 1em 0 1em;
  }

  @media (max-width: ${media.width.phone}) {
    top: 50%;
    transform: translate(-50%);
    width: 80%;
    text-align: center;
    font-size: 2.5rem;
  }
`;
