import styled from "styled-components";
import { media } from "../../../utils/media";

export const StyledUserSettings = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  ${media.laptop} {
    width: auto;
  }
  .user-settings {
    &__notification-button, &__wishlist-button {
      font-size: 2.5rem;
      color: ${props => props.theme.primaryColor};
      width: 33.333%;
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
      width: 33.333%;
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