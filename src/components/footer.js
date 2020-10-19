import React, { Component } from 'react'
import logoHorz from '../assets/logo_horz.svg'
import behance from '../assets/social/behance.svg'
import ig from '../assets/social/git.png'
import linkedn from '../assets/social/linkedin.svg'

import { FooterDesktop, FooterMobile } from '../styles/footer';
import {Link} from 'react-router-dom'


export default class Footer extends Component {


    render() {
        return (
            <>
            <FooterDesktop>
                <div id="line">
                    <hr style={{borderColor: '#C365EF', height: 2, backgroundColor: '#C365EF'}}/>
                </div>

                <div id="logo">
                    <img alt={`Felipe Veiga`} src={logoHorz} height='30vh'/>
                    <h2>Can i help you? <Link to="/contact">contact me</Link></h2>
                </div>

                <div id="menu">
                    <ul>
                        <li style={{textDecoration: "underline", fontSize: "1.2rem"}}>Menu</li>
                        <li><Link to="/">home</Link></li>
                        {/* eslint-disable-next-line */}
                        <li><Link to="/projects">projects</Link></li>
                        {/* eslint-disable-next-line */}
                        <li><Link to="/contact">contact me</Link></li>
                    </ul>
                </div>

                <div id="social">
                    <h2 style={{color: '#fff'}}>follow me</h2>
                    <div className="socialBottom">
                    <a
                    href="https://www.behance.net/lzfelipevs3c78"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img alt={`Social Icon`} src={behance} height='20vh'/>
                    </a>
                    <a
                    href="https://github.com/lzfelipe"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img alt={`Social Icon`} src={ig} height='20vh'/>
                    </a>
                    <a
                    href="https://www.linkedin.com/in/luiz-felipe-veiga-de-siqueira-a91491181"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img alt={`Social Icon`} src={linkedn} height='20vh'/>
                    </a>    
                    </div>
                </div>
            </FooterDesktop>
            
            <FooterMobile>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img alt={`Felipe Veiga`} src={logoHorz} height='30vh' style={{marginBottom: 20}}/>
                </div>

                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', margintop: 20}}>
                    <a
                    href="https://www.behance.net/lzfelipevs3c78"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img alt={`Social Icon`} src={behance} height='20vh'/>
                    </a>
                    <a
                    href="https://github.com/lzfelipe"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img alt={`Social Icon`} src={ig} height='20vh'/>
                    </a>
                    <a
                    href="https://www.linkedin.com/in/luiz-felipe-veiga-de-siqueira-a91491181"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img alt={`Social Icon`} src={linkedn} height='20vh'/>
                    </a>
                </div>


            </FooterMobile>
            
            </>
        )
    }
}
