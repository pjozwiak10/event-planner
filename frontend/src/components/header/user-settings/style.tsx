import styled from "styled-components";
import { media } from "../../../utils/media";

export const StyledUserSettings = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  justify-items: center;
  width: 100%;
  ${media.laptop} {
    width: auto;
    grid-template-columns: repeat(3,auto);
  }
  .user-settings {
    &__notification-button, &__wishlist-button {
      font-size: 2.5rem;
      color: ${props => props.theme.primaryColor};
      ${media.laptop} {
        margin: 0 2rem 0 0;
        width: auto;
      }
    }
    &__account-desktop {
      display: none;
      ${media.laptop} {
        display: flex;
        align-items: center;
      }
    }
    &__account-mobile {
      ${media.laptop} {
        display: none;
      }
    }
    &__account-link, &__separator {
      font-size: 1.6rem;
    }
    &__separator {
      margin: 0 1rem;
    }
    &__account-link {
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        font-size: 2.5rem;
      }
    }
    &__user {
      margin: 0 0 0 0.5rem;
    }
  }
`;