import React from 'react'
import logoHorz from '../assets/logo_horz.svg'
import socialLinks from './socialLinks'

import { FooterDesktop, FooterMobile } from '../styles/footer';
import {Link} from 'react-router-dom'


export default function Footer() {
    const socialIcons = socialLinks.map(({ name, href, icon }) => (
        <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
            <img alt={name} src={icon} height='20vh'/>
        </a>
    ))

    return (
        <>
        <FooterDesktop>
            <div id="line">
                <hr />
            </div>

            <div id="logo">
                <img alt={`Felipe Veiga`} src={logoHorz} height='30vh'/>
                <h2>Can i help you? <Link to="/contact">contact me</Link></h2>
            </div>

            <div id="menu">
                <ul>
                    <li className="menu-title">Menu</li>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/projects">projects</Link></li>
                    <li><Link to="/contact">contact me</Link></li>
                </ul>
            </div>

            <div id="social">
                <h2>follow me</h2>
                <div className="socialBottom">
                    {socialIcons}
                </div>
            </div>
        </FooterDesktop>

        <FooterMobile>
            <div className="logo">
                <img alt={`Felipe Veiga`} src={logoHorz} height='30vh'/>
            </div>

            <div className="social">
                {socialIcons}
            </div>
        </FooterMobile>

        </>
    )
}
