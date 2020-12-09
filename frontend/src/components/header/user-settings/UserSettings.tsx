import Link from 'next/link';
import React from 'react'
import { Media } from '../../../utils/createAppMedia';
import { StyledBellIcon, StyledHeartIcon, StyledUserIcon } from '../../global/StyledIcons';
import { StyledUserSettings } from './style';

const user = 'mnowak10';

const UserSettings = () => {
  return (
    <StyledUserSettings className="user-settings">
      <button className="user-settings__wishlist-button">
        <StyledHeartIcon />
      </button>
      <button className="user-settings__notification-button">
        <StyledBellIcon className="user-settings" />
      </button>
      <Media greaterThanOrEqual={'laptop'} className="user-settings__account-desktop">
        {user ?
          <Link href="/mojekonto"><a className="user-settings__account-link">
            <StyledUserIcon />
            <span className="user-settings__user">{user}</span>
          </a></Link>
          : <>
            <Link href="/konto?action=login"><a className="user-settings__account-link user-settings__account-link--login">Zaloguj się</a></Link>
            <span className="user-settings__separator">|</span>
            <Link href="/konto?action=register"><a className="user-settings__account-link user-settings__account-link--register">Zarejestruj się</a></Link>
          </>}
      </Media>
      <Media between={['mobile', 'laptop']} className="user-settings__account-mobile">
        <Link href="/myaccount"><a className="user-settings__account-link">
          <StyledUserIcon />
        </a></Link>
      </Media>
    </StyledUserSettings>
  )
}

export default UserSettings;
