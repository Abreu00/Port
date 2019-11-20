import styled from "styled-components";

const ClearFix = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export default ClearFix;
