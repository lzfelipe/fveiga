import React from 'react';

import NavBar from './components/navBar'

import { SubTitle, Title, MainButton, TitleContainer, SocialIconsDesktop, KnowMeText } from './styles/title'
import { motion } from "framer-motion"

import behance from './assets/social/behance.svg'
import ig from './assets/social/ig.svg'
import linkedn from './assets/social/linkedin.svg'


function App() {
  return (
    
    <div style={styles.mainDiv}>
      <style jsx global>
        {`body { margin: 0px; padding: 0px; font-family: 'Red Hat Display', sans-serif;}`}
      </style>

    <NavBar />
    
    <motion.div  animate={{y: '0vh', opacity: 1}} initial={{y: '-30vh', opacity: 0}} transition={{duration: 1.5}} >
      <div style={{display: 'flex', width: '100%', justifyContent: 'center', textAlign: "center"}}>
        <TitleContainer>

          <Title>Hello,<br></br> I'm Felipe<span>.</span></Title>
            <SubTitle>javascript fullstack developer &#38; digital designer </SubTitle>
            <div>
            <MainButton>see my projects</MainButton>
            </div>

            <KnowMeText><h2>Know me &#8594;</h2></KnowMeText>
            
        </TitleContainer>

    

    <SocialIconsDesktop>
      <div style={styles.socialContainer}>
        <div style={styles.socialWrapper}>

          <a href="https://www.behance.net/lzfelipevs3c78" target="_blank" rel="noopener noreferrer">
            <img src={behance} alt="behance" width='20' />
          </a>

          <a href="https://github.com/lzfelipe" target="_blank" rel="noopener noreferrer">
            <img src={ig} alt="ig" width='20'></img>
          </a>

          <a href="https://www.linkedin.com/in/luiz-felipe-veiga-de-siqueira-a91491181/" target="_blank" rel="noopener noreferrer">
            <img src={linkedn} alt="linkedn" width='20'></img>
          </a>
          
        </div>
      </div>
      </SocialIconsDesktop>
    
    </div>
    </motion.div>

    </div>
  );
}

export default App;


//Passar socialContainer e SocialWrapper para styled components para usar mediaQuerries dps <--- @@@important
const styles = {
  mainDiv: {
    backgroundColor: '#18161D', 
    width: '100%', 
    height: '150vh'
  },

  socialContainer: {
    display: 'flex', height: '80%', position: 'absolute', width: '15%', alignItems: 'center', right: 0 
  },

  socialWrapper: {
    height: '40%', justifyContent: 'space-around', display: 'flex', flexDirection: 'column'
  }
}  