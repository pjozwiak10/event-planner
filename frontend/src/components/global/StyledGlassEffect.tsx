import styled from "styled-components";

export const StyledGlassEffect = styled.div`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: saturate(180%) blur(20px);
  z-index: -1;
`