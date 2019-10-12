import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 7rem;
  max-width: 100rem;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  width: 100%;
  flex-direction: row;

  & > :last-child {
    flex: 1;
  }

  @media (max-width: 800px) {
    & {
      flex-direction: column-reverse;
    }
  }
`;
