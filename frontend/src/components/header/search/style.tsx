import { motion } from "framer-motion";
import styled from "styled-components";
import { media } from "../../../utils/media";

export const StyledSearch = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.laptop} {
    padding: 0 1.5rem 0 0;
    margin: 0 2rem 0 auto;
    height: 50px;
    width: 26px;
    background: rgba(255,255,255,0);
    justify-content: flex-end;
    overflow: hidden;
    border-radius: 1rem;
  }
  .search {
    &__toggler {
      position: relative;
      font-size: 2.5rem;
      color: ${props => props.theme.primaryColor};
      width: 100%;
      ${media.laptop} {
        width: auto;
        margin: 0 0 0 1.5rem;
        transform: translateX(15px);
      }
    }
    &__input {
      width: 300px;
      height: 30px;
      border-bottom: 1px solid ${({ theme }) => theme.primaryColor};
      padding: 0.5rem 0;
      font-size: 1.3rem;
      margin: 0 0 0 1.5rem;
      display: none;
      ${media.laptop} {
        opacity: 0;
        display: block;
      }
    }
  }
`