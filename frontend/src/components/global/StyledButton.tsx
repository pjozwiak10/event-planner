import styled from "styled-components";
import { media } from "../../utils/media";

export const StyledButton = styled.button`
  position: relative;
  font-size: 1.8rem;
  font-weight: 400;
  padding: 1rem 2.5rem;
  background: ${props => props.theme.buttonBackgroundColor};
  background: ${props => `linear-gradient(135deg, ${props.theme.buttonBackgroundColor} 0%, ${props.theme.gradientButtonBackgroundColor} 100%)`};
  color: ${props => props.theme.buttonTextColor};
  cursor: pointer;
  border-radius: 1rem;
  transition: 0.4s;
  z-index: 1;
  &::before {
    content:'';
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.buttonBackgroundColor};
    background: ${props => `linear-gradient(135deg, ${props.theme.buttonBackgroundColor} 0%, ${props.theme.gradientButtonBackgroundColor} 100%)`}; 
    z-index: -1;
    border-radius: 1rem;
    filter: blur(10px);
    transform: translateY(5px) scale(0.9);
  }
  ${media.laptop} {
    &::after {
      content:'';
      position: absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      background: ${props => props.theme.buttonBackgroundColorHover};
      opacity: 0;
      transition: 0.4s;
      z-index: -1;
      border-radius: 0.9rem;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
      color: ${props => props.theme.buttonTextColorHover};
    }
  }
`;