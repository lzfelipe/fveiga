import React from 'react';
import NavBar from './components/navBar'
import { motion } from "framer-motion"
import Index from './pages/Index';

function App() {
  return (

    <div style={styles.mainDiv}>
      <style jsx="true" global="true">
        {`body {margin: 0px; padding: 0px; font-family: 'Red Hat Display', sans-serif;}`}
      </style>
      <style jsx="true" global="true">
        {`body {background-color: #18161D; margin: 0px; padding: 0px; overflow-x: hidden; max-width: 100vw; -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;}`}
      </style>

    <NavBar />
    
    <motion.div  animate={{y: '0vh', opacity: 1}} initial={{y: '-30vh', opacity: 0}} transition={{duration: 1.5}} >
      <Index />
    </motion.div>

    </div>
  );
}

export default App;


const styles = {
  mainDiv: {
    backgroundColor: '#18161D', 
    width: '100%', 
    height: 'fit-content',
  },
}