import styled from 'styled-components'


export const FooterDesktop = styled.footer`
      background-color: var(--surface);
      height: fit-content;
      padding-bottom: 5%;
      padding-top: 5%;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      padding-left: 10%;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: flex-start;
      align-items: flex-start;

     #line {
         width: 30%;
         margin-right: 20px;

         hr {
             height: 2px;
             border: none;
             border-radius: 2px;
             background: linear-gradient(90deg, transparent, var(--accent) 35%);
         }
     }

     #logo {
         font-size: 0.6em;
         color: #FFF;
         width: 20%;
         a {
            text-decoration: underline;
            text-decoration-color: var(--accent);
            text-underline-offset: 3px;
            color: #FFF;
            transition: color .2s;
         }
         a:hover {
            color: var(--accent);
         }
     }

     #menu {
         width: 20%;
         margin-top: -1.5%;

         ul {
             list-style: none;
         }
         .menu-title {
             text-decoration: underline;
             text-decoration-color: var(--accent);
             text-underline-offset: 4px;
             font-size: 1.2rem;
             margin-bottom: 4px;
         }
         li, a {
             color: #FFF;
             font-weight: 400;
             text-decoration: none;
             line-height: 1.6;
         }
         a {
             opacity: .8;
             transition: opacity .2s, color .2s;
         }
         a:hover {
             opacity: 1;
             color: var(--accent);
         }
     }

     #social {
        margin-top: -1.5%;
        h2 {
            color: #fff;
            font-size: 1.2rem;
        }

        .socialBottom {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-around;
        }
     }

     #social a img {
        transition: transform .2s;
     }
     #social a:hover img {
        transform: translateY(-2px);
     }

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const FooterMobile = styled.footer`
      background-color: var(--surface);
      height: fit-content;
      padding-bottom: 10%;
      padding-top: 10%;
      width: 100%;

      .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
      }

      .social {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;
      }

    @media screen and (min-width: 1024px) {
        display: none;
    }
`
