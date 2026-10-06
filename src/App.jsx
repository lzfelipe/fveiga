import React from 'react';
import NavBar from './components/navBar'
import { motion } from "framer-motion"
import Index from './pages/Index';

function App() {
  return (

    <div style={styles.mainDiv}>

    <NavBar />

    {/* position: relative keeps this wrapper as the reference box for the absolutely positioned social icons
        (older framer-motion left a transform here that did the same implicitly) */}
    <motion.div style={{position: 'relative'}} animate={{y: '0vh', opacity: 1}} initial={{y: '-30vh', opacity: 0}} transition={{duration: 1, ease: 'easeOut'}} >
      <Index />
    </motion.div>

    </div>
  );
}

export default App;


const styles = {
  mainDiv: {
    backgroundColor: 'var(--bg)',
    width: '100%',
    height: 'fit-content',
  },
}
