import React from 'react';
import logo from './assets/logo.svg'


// eslint-disable-next-line
function App() {
  return (
    
    <div style={styles.mainDiv}>
      <style jsx global>
        {`body { margin: 0px; padding: 0px;}`}
      </style>

    <nav style={styles.navArea}>
      <div style={styles.logoBox}>
        {/* eslint-disable-next-line */}
          <img src={logo}></img>
      </div>

      <div style={{display: 'flex', }}>
        <ul style={{display: 'flex'}}>
          {/* eslint-disable-next-line */}
          <li><a href={'test'}>home</a></li>
          {/* eslint-disable-next-line */}
          <li><a>portfolio</a></li>
          {/* eslint-disable-next-line */}
          <li><a>resume</a></li>
          {/* eslint-disable-next-line */}
          <li><a>contact me</a></li>
        </ul>
      </div>

    </nav>
    </div>
  );
}

export default App;

const styles = {
  mainDiv: {
    backgroundColor: 'black', 
    width: '100%', 
    height: '100vh'
  },

  navArea: {
    backgroundColor: 'grey', //black
    width: '100%',
    height: '10%',
    display: 'flex',
    alignItems: 'center',
  },

  logoBox: {
    marginLeft: 50
  }
}