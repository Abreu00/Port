import styled from "styled-components";

export const CardInfo = styled.div`
  background: ${props => props.theme.color.primary};
  width: 70%;
  border-radius: 50%;
  padding-top: 70%;
  margin: 0 auto;
  height: 3rem;
  display: flex;
  z-index: 222;
  backface-visibility: hidden;
  transition: transform 0.8s;
  position: relative;
`;

export const Text = styled.span`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.3;

  span {
    white-space: nowrap;
    display: block;
    text-align: center;
  }

  span:first-child {
    color: ${props => props.theme.font.colorBold};
  }
`;

export const Container = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  height: 25rem;
  flex-basis: 16rem;
  margin: 0 1rem 2rem 1rem;
  border-radius: 1em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover ${CardInfo} {
    transform: rotateY(-180deg);
  }
`;
