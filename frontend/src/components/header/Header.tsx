import React from 'react';
import { StyledGlassEffect } from '../global/StyledGlassEffect';
import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';
import Search from './search/Search';
import { StyledHeader } from './style';
import UserSettings from './user-settings/UserSettings';

const Header = () => {

  return (
    <StyledHeader className="header">
      <StyledGlassEffect className="header__glass-effect" />
      <div className="header__inner-wrapper">
        <Logo />
        <Navbar />
        <Search />
        <UserSettings />
      </div>
    </StyledHeader>
  )
}

export default Header
