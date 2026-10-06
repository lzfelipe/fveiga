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

.projects-title {
  font-size:  10vw;

  @media screen and (min-width: 1024px) {
    margin-top: 7vh;
    font-size:  10vw;
  }
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
 background-color: var(--accent);
 border: none;
 border-radius: 11px;
 padding: 10px 35px ;
 font-weight: 700;
 letter-spacing: .2px;
 cursor: pointer;
 box-shadow: 0 4px 14px var(--accent-glow);
 transition: background 0.3s, transform .2s, box-shadow .2s;


&:hover {
    background-color: var(--accent-dark);
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 8px 22px var(--accent-glow);
}

&:active {
    transform: translateY(0) scale(.98);
    box-shadow: 0 2px 8px var(--accent-glow);
}
`

export const SocialIconsDesktop = styled.div`


 @media screen and (max-width: 1024px) {
    opacity: 0;
    z-index: -1000
}

    div > div > a > img {
        padding: 6px;
        transition: background 0.3s, transform .3s, box-shadow .3s;
        border-radius: 40%;
    }

    div > div > a:hover > img,
    div > div > a:focus-visible > img {
        background: var(--accent);
        transform: scale(1.25);
        box-shadow: 0 4px 14px var(--accent-glow);
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
    font-weight: 400;
    letter-spacing: 1px;
    writing-mode: vertical-rl;
    transition: color 0.3s, font-size .3s;
}

h2:hover {
    color: #FFF;
    font-size: 18px;
    cursor: pointer;
}

/* The "Know me" hint is a link that smoothly scrolls down to the timeline */
a {
    text-decoration: none;
    animation: knowMeNudge 2.4s ease-in-out infinite;
}

@keyframes knowMeNudge {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(6px); }
}

@media (prefers-reduced-motion: reduce) {
    a { animation: none; }
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
 font-family: 'Red Hat Display', sans-serif;

}

.timeline:before {
  content: '';
  border-left: 2px solid white;
  /* tall enough to reach the last (big) dot */
  min-height: 34em;
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
  font-weight: 700;
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
  color: rgba(255, 255, 255, .85);
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


@media only screen 
  and (max-width: 1024px)  { 
    .timeline {
      display: none;
    }
}

/* Iphone X Portrait */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) { 
    .timeline .entries .entry .body p {
      line-height: 1.6em;
    }

    .timeline {
      display: none;
    }
}

`

export const TimeLineMobile = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-content: center;
flex-direction: column;
align-items: center;
justify-items: center;


@media only screen 
  and (min-width: 1025px)  { 
      display: none;
}


.entry{
  display: flex;
  width: 80%;
  height: 50%;
  background-color: transparent;
}

.year {
  color: #FFF;
  display: flex;
  align-content: center;
  align-items: center;
  background-color: transparent;

  .circle {
    height: 11px;
    width: 11px; 
    background-color: #C365EF;
    border-radius: 20px;
    margin-right: 5px;
  }

  .line{
    height: 2.5rem;
    width: 2.5px; 
    background-color: #FFF;
    margin-left: -40%;
    margin-bottom: -100%;
  }
}


.text {
  color: #fff;
  margin-left: 20px;
  display: flex;
  align-content: center;
  align-items: center; 
}


`