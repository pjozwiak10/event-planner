import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    background: #eee;
  }
  50% {
    background: #ccc;
  }
  100% {
    background: #eee;
  }
`;

export const StyledLazyImage = styled.div<{ ratio: string }>`
  position: relative;
  width: 100%;
  padding-bottom: ${props => props.ratio};
  .lazy-image {
    &__loader {
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      animation: ${loadingAnimation} 1s infinite;
    }
    &__image {
      position: absolute;
      top:0;
      left:0;
      width: 100%;
    }
  }
`;