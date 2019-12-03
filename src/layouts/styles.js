import styled from "styled-components";
import media from "../Globals/mediaQueries";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  width: 100%;
  flex-direction: row;
  min-height: calc(100% - 3.9rem); /*100% - footer size - margin-bottom*/

  & > :last-child {
    flex: 1;
    min-height: 100%;
    margin-bottom: 2rem;
  }

  @media (max-width: ${media.width.tablet.portrait}) {
    & {
      flex-direction: column-reverse;
    }
  }
`;
