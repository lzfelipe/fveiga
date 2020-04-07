import React from 'react';

import NavBar from './components/navBar'

import { SubTitle, Title, MainButton, TitleContainer } from './styles/title'



function App() {
  return (
    
    <div style={styles.mainDiv}>
      <style jsx global>
        {`body { margin: 0px; padding: 0px; font-family: 'Red Hat Display', sans-serif;}`}
      </style>

    <NavBar />
    
    <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
    <TitleContainer>
      <Title>Hello,<br></br> I'm Felipe<span>.</span></Title>
      <SubTitle>javascript fullstack developer &#38; digital designer </SubTitle>
      <div>
      <MainButton>see my projects</MainButton>
      </div>
      
    </TitleContainer>
    </div>

    </div>
  );
}

export default App;

const styles = {
  mainDiv: {
    backgroundColor: '#18161D', 
    width: '100%', 
    height: '100vh'
  },
}