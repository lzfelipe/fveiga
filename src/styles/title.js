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
 transition: background 0.5s, transform .2s;


:hover {
    background-color: #7f4d96;
    transform: scale(1.1);
    cursor: pointer;
}
`

export const SocialIconsDesktop = styled.div`


 @media screen and (max-width: 1024px) {
    opacity: 0;
    z-index: -1000
}

    div > div > a > img {
        padding: 5px;
        transition: background 0.5s, transform .4s;
        border-radius: 40%;
    }
    
    div > div > a > img:hover{
        background: #C365EF;
        transform: scale(1.3);
    }

    

`


export const KnowMeText = styled.div`
 @media screen and (max-width: 1024px) {    
     h2 {
    color: #aaa;
    font-size: 15px;
    font-weight: 100;
    writing-mode: vertical-rl;
    }
}
    width: 100%;
    height: 120px;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    

h2 {
    color: #aaa;
    font-size: 15px;
    font-weight: 100;
    writing-mode: vertical-rl;
    transition: color 0.3s, font-size .3s;
}

h2:hover {
    color: #FFF;
    font-size: 18px;
    cursor: pointer;
}


`

export const Timeline = styled.div`
display: flex;
align-content: center;
justify-content: center;
text-align: center;
height: fit-content;


.timeline {
 margin: 0;
 font-family: 'Red Hat', sans-serif;

}

.timeline:before {
  content: '';
  border-left: 2px solid white;
  min-height: 33em;
  position: absolute;
  margin-top: 30px;
}


@media screen and (max-width: 1024px) {    
 .timeline:before {
  height: 790px;
}
}

.timeline .entries {
  width: calc(100% - 80px);
  max-width: 800px;
  margin: auto;
  position: relative;
  left: -4.5px;
}
.timeline .entries .entry {
  width: calc(50% - 80px);
  float: left;
  padding: 20px;
  clear: both;
  text-align: right;
}
.timeline .entries .entry:not(:first-child) {
  margin-top: -60px;
}
.timeline  .entries .entry .title {
  font-size: 32px;
  margin-bottom: 12px;
  position: relative;
  color: #fff;
}
.timeline .entries .entry .title:before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border: 4px solid #18161D;
  background-color: #C365EF;
  border-radius: 100%;
  top: 45%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  right: -72.999px;
  z-index: 1000;
}
.timeline .entries .entry .title.big:before {
  width: 24px;
  height: 24px;
  -webkit-transform: translate(8px, -50%);
          transform: translate(8px, -50%);
}
.timeline .entries .entry .body {
  color: #fff;
}
.timeline .entries .entry .body p {
  line-height: 1.4em;
}
.timeline .entries .entry:nth-child(2n) {
  text-align: left;
  float: right;
}
.timeline .entries .entry:nth-child(2n) .title:before {
  left: -63px;
}
.timeline .entries .entry:nth-child(2n) .title.big:before {
  -webkit-transform: translate(-8px, -50%);
          transform: translate(-8px, -50%);
}

`