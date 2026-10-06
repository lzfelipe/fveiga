import React from "react";
import logo from '../assets/logo.svg'
import logoHorz from '../assets/logo_horz.svg'
import socialLinks from './socialLinks'
import { Link, NavLink } from 'react-router-dom'

import { NavContainer, MenuWrap, Hamburger, Menu, MenuContainer, LogoBox, IconsContainer, DesktopMenuContainer } from '../styles/navBar';

export default function NavBar() {
    return (
      <NavContainer>
        <LogoBox>
          <Link to="/" aria-label="Felipe Veiga — home">
            <img src={logo} alt="logo"></img>
          </Link>
        </LogoBox>


        {/* Menu Mobile */}
        <MenuWrap>
            <input type="checkbox" aria-label="Open menu"/>
            <Hamburger>
                <div />
            </Hamburger>
            <Menu>
                <MenuContainer>
                    <div>
                        <img src={logoHorz} alt="logo"></img>
                        <ul>
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/projects">projects</Link></li>
                            <li><Link to="/contact">contact me</Link></li>
                            <hr style={{marginLeft: '-28%'}}></hr>
                            <IconsContainer>
                                {socialLinks.map(({ name, href, icon }) => (
                                    <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
                                        <img src={icon} alt={name}></img>
                                    </a>
                                ))}
                            </IconsContainer>
                        </ul>
                    </div>
                </MenuContainer>
            </Menu>
        </MenuWrap>


        {/* Menu Desktop — NavLink adds the "active" class used to keep the current page underlined */}
        <DesktopMenuContainer>
          <ul>
            <li><NavLink to="/" end>home</NavLink></li>
            <li><NavLink to="/projects">projects</NavLink></li>
            <li><NavLink to="/contact">contact me</NavLink></li>
          </ul>
        </DesktopMenuContainer>

      </NavContainer>
    );
}
