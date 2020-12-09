import styled from "styled-components";
import { media } from "../../utils/media";

export const StyledHeader = styled.header`
  position: fixed;
  bottom:0;
  left:0;
  width: 100%;
  height: 60px;
  background: rgba(255,255,255,0.6);
  box-shadow: 0 -4px 8px 0 rgba(0,0,0,0.2);
  z-index: 2;
  ${media.laptop} {
    bottom: auto;
    top: 0;
    height: 80px;
    padding: 0 1.5rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
  .header {
    &__inner-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 3fr 1fr;
      justify-items: center;
      align-items: center;
      height: 100%;
      max-width: 1440px;
      margin: 0 auto;
      ${media.laptop} {
        grid-template-columns: auto auto 1fr auto;
      }
    }
  }
`;