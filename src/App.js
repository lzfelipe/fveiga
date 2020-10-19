import React from 'react';
import NavBar from './components/navBar'
import { motion } from "framer-motion"
import Index from './pages/Index';

function App() {
  return (

    <div style={styles.mainDiv}>
      

    <NavBar />
    
    <motion.div  animate={{y: '0vh', opacity: 1}} initial={{y: '-30vh', opacity: 0}} transition={{duration: 1}} >
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