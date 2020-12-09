import styled from "styled-components";
import { media } from "../../../utils/media";

export const StyledNavbar = styled.nav`
  position: relative;
  order: 1;
  ${media.laptop} {
    order: unset;
  }
`;

export const StyledNavbarToggler = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 25px;
  height: 25px;
  .navbar-toggler {
    &__line {
      position: absolute;
      width: 100%;
      height: 2px;
      border-radius: 1rem;
      background: ${props => props.theme.primaryColor};
      background: ${props => `linear-gradient(to bottom, ${props.theme.primaryColor} 0%, ${props.theme.secondaryColor} 100%)`};
      &--first {
        transform: translateY(-8px);
      }
      &--third {
        transform: translateY(8px);
      }
    }
  }
`;

export const StyledMenu = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 83.333%;
  background: rgba(255,255,255, 0.6);
  overflow: hidden;
  z-index: 1;
  transform: translateX(-100%);
  ${media.tablet} {
    width: 50%;
  }
  ${media.laptop} {
    top: 80px;
    width: 30%;
    height: calc(100vh - 80px);
    height: calc(var(--vh, 1vh) * 100 - 80px);
  }
  .navbar-menu {
    &__list {
      padding: 3rem 4.5rem;
      overflow: hidden;
    }
    &__list-item {
      display: flex;
      font-size: 2.8rem;
      margin: 0 0 1.5rem 0;
      font-weight: 700;
      transform: translateX(calc(-100% - 45px));
      &:nth-last-child(1) {
        margin: 0;
      }
    }
  }
`