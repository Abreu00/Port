import styled from "styled-components";
import media from "../../Globals/mediaQueries";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  width: 100%;
  flex-direction: row;

  & > :last-child {
    flex: 1;
  }

  @media (max-width: ${media.width.pc.smaller}) {
    & {
      flex-direction: column-reverse;
    }
  }
`;
export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
