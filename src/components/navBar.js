import React, { Component } from "react";
import logo from '../assets/logo.svg'
import logoHorz from '../assets/logo_horz.svg'
import behance from '../assets/social/behance.svg'
import ig from '../assets/social/git.png'
import linkedn from '../assets/social/linkedin.svg'
import {Link} from 'react-router-dom'

import { NavContainer, MenuWrap, Hamburger, Menu, MenuContainer, LogoBox, IconsContainer, DesktopMenuContainer } from '../styles/navBar';

export default class components extends Component {
  render() {
    return (
      <NavContainer>
        <LogoBox>
          <a href="/fveiga">
            <img src={logo} alt="logo"></img>
          </a>
        </LogoBox>


        {/* Menu Mobile */}
        <MenuWrap>
            <input type="checkbox"/>
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
                                <img src={behance} alt="logo"></img>
                                <img src={ig} alt="logo"></img>
                                <img src={linkedn} alt="logo"></img>
                                
                            </IconsContainer>
                        </ul>
                    </div>
                </MenuContainer>
            </Menu>
        </MenuWrap>


        {/* Menu Desktop */}
        <DesktopMenuContainer>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/projects">projects</Link></li>
            <li><Link to="/contact">contact me</Link></li>
          </ul>
        </DesktopMenuContainer>
        
      </NavContainer>
    );
  }
}
