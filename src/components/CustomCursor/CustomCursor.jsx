"use client"
import React, { useEffect, useState } from 'react';  
import { motion, useAnimation } from 'framer-motion';  
import { GiQueenCrown } from "react-icons/gi";

const CustomCursor = ({ showIcon }) => {  
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });  
  const controls = useAnimation();  

  useEffect(() => {  
    const handleMouseMove = (event) => {  
      setCursorPosition({ x: event.clientX, y: event.clientY });  
    };  

    window.addEventListener('mousemove', handleMouseMove);  

    return () => {  
      window.removeEventListener('mousemove', handleMouseMove);  
    };  
  }, []);  

  useEffect(() => {  
    controls.start({ x: cursorPosition.x - 10, y: cursorPosition.y - 10 });  
  }, [cursorPosition, controls]);  

  return (  
    <>  
      <motion.div  
        className="custom-cursor"  
        style={{  
          position: 'fixed',  
          top: 0,  
          left: 0,  
          width: '40px',  
          height: '40px',  
          borderRadius: '50%',  
          backgroundColor: 'rgba(247, 241, 241, 0.5)', // Change color as needed  
          pointerEvents: 'none',  
        }}  
        animate={controls}  
      />  
     
      {showIcon && (  
        <motion.div  
          className="king-icon"  
          style={{  
            position: 'fixed',  
            top: cursorPosition.y , // Adjust the positioning  
            left: cursorPosition.x ,  
            width: '20px',  
            height: '20px',  
            pointerEvents: 'none',  
          }}  
          animate={{ scale: [2, 3, 2], opacity: [1, 1, 1] }} // Simple animation  
        >  
          <GiQueenCrown  style={{ width: '100%', height: '100%', }} />  
        </motion.div>  
      )}  
    </>  
  );  
};  

export default CustomCursor;  