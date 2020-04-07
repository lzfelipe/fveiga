import styled from 'styled-components'

export const NavContainer = styled.div`
        background-color: #18161D;
        width: 100%;
        height: 10%;
        display: flex;
        align-items: center;
        justify-items: space-around;
`

export const LogoBox = styled.div`
        margin-left: 20px;

    @media screen and (min-width: 1024px) {
        margin-left: 50px;
    }
`

export const MenuContainer = styled.div`
        background: rgba(36, 34, 41, 0.97);
        border-radius: 50%;
        width: 200vw;
        height: 200vw;
        display: flex;
        flex: none;
        align-items: center;
        justify-content: center;
        transform: scale(0);
        transition: all 0.4s ease;
        justify-items: center;

`

export const Menu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    ${MenuContainer} > div {
        text-align: center;
        max-width: 80vw;
        max-height: 100vh;
        opacity: 0;
        transition: opacity 0.4s ease;
    }

    ${MenuContainer} > div > ul > li {
        margin-left: -28%;
        list-style: none;
        color: #fff;
        font-size: 1.5rem;
        padding: 1rem;
    }

    ${MenuContainer} > div > ul > li > a {
        color: inherit;
        text-decoration: none;
        transition: color 0.4s ease;
    }
`

export const Hamburger = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 60px;
    height: 60px;
    padding: 0.3vw;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        position: relative;
        flex: none;
        width: 50%;
        height: 2px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease;
    }
    
    div::before, div::after {
        content: '';
        position: absolute;
        z-index: 1;
        top: -10px;
        width: 100%;
        height: 2px;
        background: inherit;
    }

    div::after {
        top: 10px;
    }
`

export const MenuWrap = styled.div`
    @media screen and (min-width: 1024px) {
        display: none;
    }

    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;

    input {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        cursor: pointer;
        width: 50px;
        height: 50px;
        opacity: 0;
    }

    input:checked + ${Hamburger} > div {
        transform: rotate(135deg);
    }

    input:checked + ${Hamburger} > div:before,
    input:checked + ${Hamburger} > div:after {
        top: 0;
        transform: rotate(90deg);
    }
    
    input:checked:hover + ${Hamburger} > div {
        transform: rotate(225deg);
    }

    input:checked ~ ${Menu} {
        visibility: visible;
    }
    
    input:checked ~ ${Menu} > div {
        transform: scale(1);
        transition-duration: var(--menu-speed);
    }

    input:checked ~ ${Menu} > div > div {
        opacity: 1;
        transition:  opacity 0.4s ease 0.4s;
    }
`

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 130%;
    justify-content: space-around;
    align-self: center;
    transform: translate(-22%);
    img {
        margin-top: 20px;
        height: 30px;
    }
`