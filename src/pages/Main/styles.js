import styled from "styled-components";
import media from "../../Globals/mediaQueries";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 7rem;
  width: 100%;
  justify-content: left;

  @media (max-width: ${media.width.small}) {
    & {
      justify-content: space-between;
    }
  }
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

  @media (max-width: ${media.width.small}) {
    & {
      flex-direction: column-reverse;
    }
  }
`;
