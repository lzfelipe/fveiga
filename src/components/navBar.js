import React, { Component } from "react";
import logo from '../assets/logo.svg'
import logoHorz from '../assets/logo_horz.svg'
import behance from '../assets/social/behance.svg'
import ig from '../assets/social/ig.svg'
import linkedn from '../assets/social/linkedin.svg'

import { NavContainer, MenuWrap, Hamburger, Menu, MenuContainer, LogoBox, IconsContainer, DesktopMenuContainer } from '../styles/navBar';

export default class components extends Component {
  render() {
    return (
      <NavContainer>
        <LogoBox>
          {/* eslint-disable-next-line */}
          <a href="#">
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
                            {/* eslint-disable-next-line */}
                            <li><a href="#">home</a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">resume</a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">projecsts</a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">contact me</a></li>

                            <hr style={{marginLeft: '-28%'}}></hr>

                            <IconsContainer>
                                <img src={linkedn} alt="logo"></img>
                                <img src={ig} alt="logo"></img>
                                <img src={behance} alt="logo"></img>
                            </IconsContainer>
                        </ul>
                    </div>
                </MenuContainer>
            </Menu>
        </MenuWrap>
        {/* Menu Desktop */}
        <DesktopMenuContainer>
          <ul>
            {/* eslint-disable-next-line */}
            <li><a href="#">home</a></li>
            {/* eslint-disable-next-line */}
            <li><a href="#">resume</a></li>
            {/* eslint-disable-next-line */}
            <li><a href="#">projects</a></li>
            {/* eslint-disable-next-line */}
            <li><a href="#">contact me</a></li>
            {/* eslint-disable-next-line */}
            <li>EN_PT</li>
          </ul>
        </DesktopMenuContainer>
        
      </NavContainer>
    );
  }
}
