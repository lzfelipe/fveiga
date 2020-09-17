import styled from 'styled-components'


export const FooterDesktop = styled.div`
      background-color: #34303C;
      height: fit-content; 
      padding-bottom: 5%;
      padding-top: 5%;
      width: '100%';
      display: flex;
      padding-left: 10%;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: flex-start;
      align-items: flex-start;
      
     #line {
         width: 30%;
         margin-right: 20px;
     }

     #logo {
         font-size: 0.6em;
         color: #FFF;
         width: 20%;
         a{
            text-decoration: underline;
            color: #FFF;

         }
     }

     #menu {
         width: 20%;
         margin-top: -1.5%;

         ul {
             list-style: none;
         }
         li, a {
             color: #FFF;
             font-weight: 0;
             text-decoration: none;
         }
     }

     #social {
        margin-top: -1.5%;
        h2{
            font-size: 1.2rem;
        }

        .socialBottom {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-around;
        }
     }
      
    @media screen and (max-width: 1024px) {
    display: none;
}
`

export const FooterMobile = styled.div`
      background-color: #34303C;
      height: fit-content; 
      padding-bottom: 10%;
      padding-top: 10%;
      width: '100%';
      display: "flex";

      
    @media screen and (min-width: 1024px) {
    display: none;
}
`