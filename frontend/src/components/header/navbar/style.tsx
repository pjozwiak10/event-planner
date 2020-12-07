import { motion } from "framer-motion";
import styled from "styled-components";
import { media } from "../../../utils/media";

export const StyledNavbar = styled.nav`
  position: relative;
  width: 16.667%;
  ${media.laptop} {
    width: auto;
  }
`;

export const StyledNavbarToggler = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  transition: 0.4s;
  ${media.laptop} {
    padding: 0.5rem 1.5rem;
  }
  &::before, &::after {
    position: absolute;
    top:0;
    bottom:0;
    width: 10%;
    border-top: 2px solid ${props => props.theme.primaryColor};
    border-bottom: 2px solid ${props => props.theme.primaryColor};
    pointer-events: none;
    transition: 0.4s;
    ${media.laptop} {
      content:'';
    }
  }
  &::before {
    left:0;
    border-left: 2px solid ${props => props.theme.primaryColor};
    border-radius: 1rem 0 0 1rem;
  }
  &::after {
    right:0;
    border-right: 2px solid ${props => props.theme.primaryColor};
    border-radius: 0 1rem 1rem 0;
  }
  ${media.laptop} {
    &:hover {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      &::before,&::after {
        width: 50%;
      }
    }
  }
  .navbar-toggler {
    &__texts {
      display: flex;
      flex-direction: column;
      align-items:center;
      justify-content: center;
      text-transform: uppercase;
    }
    &__create {
      color: ${props => props.theme.primaryColor};
      font-weight: 700;
      font-size: 1.1rem;
      ${media.laptop} {
        font-size: 1.3rem;
      }
    }
    &__event { 
      font-weight: 700;
      font-size: 0.9rem;
      color: #ff009b;
      ${media.laptop} {
        font-size: 1.1rem;
      }
    }
    &__dream {
      font-size: 1.1rem;
      color: #777;
      ${media.laptop} {
        font-size: 1.3rem;
      }
    }
  }
`;

export const StyledMenu = styled(motion.div)`
  position: fixed;
  top:0;
  left: 0;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100 - 60px);
  width: 100%;
  background: rgba(255,255,255, 0.8);
  border-radius: 0 0 1rem 1rem;
  padding: 3rem 4.5rem;
  ${media.laptop} {
    top: 80px;
    width: 30%;
    height: calc(100vh - 80px);
    height: calc(var(--vh, 1vh) * 100 - 80px);
    border-radius: 0 1rem 1rem 0;
  }
  .navbar-menu {
    &__glass-effect {
      border-radius: 0 0 1rem 1rem;
      ${media.laptop} {
        border-radius: 0 1rem 1rem 0; 
      }
    }
    &__list-item {
      display: flex;
      font-size: 3rem;
      margin: 0 0 1.5rem 0;
      font-weight: 700;
      &:nth-last-child(1) {
        margin: 0;
      }
    }
  }
`