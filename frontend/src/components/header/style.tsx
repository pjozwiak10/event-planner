import styled from "styled-components";
import { media } from "../../utils/media";

export const StyledHeader = styled.header`
  position: fixed;
  bottom:0;
  left:0;
  width: 100%;
  height: 60px;
  background: rgba(255,255,255,0.8);
  border-radius: 1rem 1rem 0 0;
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  ${media.laptop} {
    bottom: auto;
    top: 0;
    height: 80px;
    border-radius: 0 0 1rem 1rem;
    padding: 0 1.5rem;
  }
  .header {
    &__glass-effect {
      border-radius: 1rem 1rem 0 0;
      ${media.laptop} {
      border-radius: 0 0 1rem 1rem;
      }
    }
    &__inner-wrapper {
      display: flex;
      align-items: center;
      height: 100%;
      max-width: 1440px;
      margin: 0 auto;
    }
  }
`