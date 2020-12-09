import styled from "styled-components";
import { media } from "../../../utils/media";

export const StyledLogo = styled.div`
  ${media.laptop} {
    margin: 0 4rem 0 0;
    width: 60px;
  }
  img {
    max-height: 60px;
  }
  .logo {
    &__link {
      text-align: center;
      i {
        font-size: 2.5rem;
      }
    }
  }
`;