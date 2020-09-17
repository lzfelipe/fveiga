import React, { Component } from 'react'
import logoHorz from '../assets/logo_horz.svg'
import behance from '../assets/social/behance.svg'
import ig from '../assets/social/ig.svg'
import linkedn from '../assets/social/linkedin.svg'

import { FooterDesktop, FooterMobile } from '../styles/footer';


export default class Footer extends Component {


    render() {
        return (
            <>
            <FooterDesktop>
                <div id="line">
                    <hr style={{borderColor: '#C365EF', height: 2, backgroundColor: '#C365EF'}}/>
                </div>

                <div id="logo">
                    <img src={logoHorz} height='30vh'/>
                    <h2>Can i help you? <a href="#">Contact-me</a></h2>
                </div>

                <div id="menu">
                    <ul>
                        <li style={{textDecoration: "underline", fontSize: "1.2rem"}}>Menu</li>
                        <li><a href="#">home</a></li>
                        <li><a href="#">projects</a></li>
                        <li><a href="#">resume</a></li>
                        <li><a href="#">contact me</a></li>
                    </ul>
                </div>

                <div id="social">
                    <h2 style={{color: '#fff'}}>follow me</h2>
                    <div className="socialBottom">
                    <img src={behance} height='20vh'/>
                    <img src={linkedn} height='20vh'/>
                    <img src={ig} height='20vh'/>
                    </div>
                </div>
            </FooterDesktop>
            
            <FooterMobile>
                <div>
                    <img src={logoHorz} height='30vh'/>
                </div>
            </FooterMobile>
            
            </>
        )
    }
}
