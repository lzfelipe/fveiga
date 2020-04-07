import styled from 'styled-components'

//NavBar 


//Titulo 
export const TitleContainer = styled.section`
display: flex;
align-self: center;
width: 80%;
flex-direction: column;

div {
    margin-top: 5%;
    width: 100%;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 1024px) {
    margin-top: 2%;
}
}

`

export const Title = styled.h1`
padding: 0;
margin: 0;
margin-top: 30%;
font-family: 'Red Hat Display';
font-size:  15vw;
font-weight: bold;
color: #fff;
text-align: center;

span {
    color: #C365EF
}

@media screen and (min-width: 1024px) {
    margin-top: 7vh;
    font-size:  10vw;
}
`

export const SubTitle = styled.h3`
padding: 0;
margin: 0;
margin-top: 5%;
font-family: 'Red Hat Display';
font-size: 1.2rem;
font-weight: normal;
color: #fff;
text-align: center;

@media screen and (min-width: 1024px) {
    margin-top: 2%;
    font-size: 1.5rem;
}


`


export const MainButton = styled.button`
 font-size: 16px;
 color: #fff;
 background-color: #C365EF;
 border: none;
 border-radius: 11px;
 padding: 10px 35px ;
 font-weight: bold;


:hover {
    background-color: #7f4d96;
    cursor: pointer;
}
`
