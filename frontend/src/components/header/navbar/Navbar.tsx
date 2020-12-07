import Link from 'next/link';
import React, { useState } from 'react';
import { StyledGlassEffect } from '../../global/StyledGlassEffect';
import { StyledMenu, StyledNavbar, StyledNavbarToggler } from './style';

const navbarMenuVariants = {
  show: { x: 0 },
  hidden: { x: '-100%' },
}

const navbarMenuTransition = {
  duration: 0.4,
  type: 'tween',
}

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  const handleShowMenu = () => {
    setMenuState(state => !state);
  }

  return (
    <StyledNavbar>
      <StyledNavbarToggler className="navbar-toggler" onClick={handleShowMenu}>
        <div className="navbar-toggler__texts">
          <p className="navbar-toggler__create">Stwórz</p>
          <p className="navbar-toggler__event">Wydarzenie</p>
          <p className="navbar-toggler__dream">Marzeń</p>
        </div>
      </StyledNavbarToggler>
      <StyledMenu className="navbar-menu"
        variants={navbarMenuVariants}
        animate={menuState ? 'show' : 'hidden'}
        initial="hidden"
        transition={navbarMenuTransition}
      >
        <StyledGlassEffect className="navbar-menu__glass-effect" />
        <ul className="navbar-menu__list">
          <li className="navbar-menu__list-item">
            <Link href="/"><a className="navbar-menu__link">Wszystkie oferty</a></Link>
          </li>
          <li className="navbar-menu__list-item">
            <Link href="/"><a className="navbar-menu__link">Zdjęcia/Film</a></Link>
          </li>
          <li className="navbar-menu__list-item">
            <Link href="/"><a className="navbar-menu__link">Miejsca</a></Link>
          </li>
          <li className="navbar-menu__list-item">
            <Link href="/"><a className="navbar-menu__link">Organizatorzy</a></Link>
          </li>
        </ul>
      </StyledMenu>
    </StyledNavbar>
  )
}

export default Navbar;
