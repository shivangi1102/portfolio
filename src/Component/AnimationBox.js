import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';
// @ts-ignore
import drawing from '../Images/drawing.png'



const AnimatedBox = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
      }}>
<div className='box'>
 <img src={drawing} alt='code'/>
  </div>
      </motion.div>
      
    
  );
};

export default AnimatedBox;