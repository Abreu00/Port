import styled from "styled-components";

export const Container = styled.div`
  background: lightcoral;
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
`;

export const CardInfo = styled.div`
  background: white;
  width: 70%;
  border-radius: 50%;
  padding-top: 70%;
  margin: 0 auto;
  height: 3rem;
  z-index: 222;
`;
