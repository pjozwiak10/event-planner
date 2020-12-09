import Link from 'next/link';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';

import { StyledGlassEffect } from '../../global/StyledGlassEffect';
import { StyledMenu, StyledNavbar, StyledNavbarToggler } from './style';

const menuTl: GSAPTimeline = gsap.timeline();
const navbarMenuListItems = [
  { name: 'Wszystkie Oferty', href: '/' },
  { name: 'Zdjęcia/Film', href: '/' },
  { name: 'Organizatorzy', href: '/' },
  { name: 'Miejsca', href: '/' },
];

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const [blockMenuAnimation, setBlockMenuAnimation] = useState(false);
  const togglerLineFirst = useRef<HTMLSpanElement | null>(null),
    togglerLineSecond = useRef<HTMLSpanElement | null>(null),
    togglerLineThird = useRef<HTMLSpanElement | null>(null),
    navbarMenuRef = useRef<HTMLDivElement | null>(null),
    listItemsRef = useRef<HTMLLIElement[] | null[]>([]);

  const handleShowMenu = () => {
    if (blockMenuAnimation) return;
    setBlockMenuAnimation(true);
    switch (menuState) {
      case true:
        setMenuState(false);
        menuTl.to(togglerLineFirst.current, { duration: 0.4, rotate: 0, y: -8, ease: 'power1.inOut' })
          .to(togglerLineSecond.current, { duration: 0.4, rotate: 0, ease: 'power1.inOut' }, '-=0.4')
          .to(togglerLineThird.current, { duration: 0.4, x: 0, opacity: 1, pointerEvents: 'auto', ease: 'power1.inOut' }, '-=0.4')
          .to(navbarMenuRef.current, { duration: 0.5, transform: 'translateX(-100%)', boxShadow: '6px 6px 12px 0 rgba(0,0,0,0)' }, '-=0.4')
          .to(listItemsRef.current, { duration: 0, transform: 'translateX(calc(-100% - 45px)', onComplete: () => setBlockMenuAnimation(false) });
        break;
      case false:
        setMenuState(true);
        menuTl.to(togglerLineFirst.current, { duration: 0.4, rotate: 45, y: 0, ease: 'power1.inOut' })
          .to(togglerLineSecond.current, { duration: 0.4, rotate: 315, ease: 'power1.inOut' }, '-=0.4')
          .to(togglerLineThird.current, { duration: 0.4, x: '-100%', opacity: 0, pointerEvents: 'none', ease: 'power1.inOut' }, '-=0.4')
          .to(navbarMenuRef.current, { duration: 0.5, transform: 'translateX(0)', boxShadow: '6px 6px 12px 0 rgba(0,0,0,0.2)' }, '-=0.4')
          .to(listItemsRef.current, { duration: 0.5, transform: 'translateX(0)', ease: 'power2.out', stagger: { amount: 0.3 }, onComplete: () => setBlockMenuAnimation(false) }, '-=0.2');
        break;
    }
  };

  return (
    <StyledNavbar>
      <StyledNavbarToggler className='navbar-toggler' onClick={handleShowMenu}>
        <span className="navbar-toggler__line navbar-toggler__line--first" ref={togglerLineFirst}></span>
        <span className="navbar-toggler__line navbar-toggler__line--second" ref={togglerLineSecond}></span>
        <span className="navbar-toggler__line navbar-toggler__line--third" ref={togglerLineThird}></span>
      </StyledNavbarToggler>
      <StyledMenu className="navbar-menu" ref={navbarMenuRef}>
        <StyledGlassEffect className="navbar-menu__glass-effect" />
        <ul className="navbar-menu__list">
          {navbarMenuListItems.map((item, i) => (
            <li className="navbar-menu__list-item" key={item.name} ref={ref => listItemsRef.current[i] = ref}>
              <Link href={item.href}><a className="navbar-menu__link">{item.name}</a></Link>
            </li>
          ))}
        </ul>
      </StyledMenu>
    </StyledNavbar>
  )
}

export default Navbar;
