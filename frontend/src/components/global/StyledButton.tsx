import styled from "styled-components";

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
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.4s;
  z-index: 1;
  &::before {
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
    &::before {
      opacity: 1;
    }
    color: ${props => props.theme.buttonTextColorHover};
  }
`;