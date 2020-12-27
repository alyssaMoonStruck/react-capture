import React from 'react'
//Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'


const ContactUs = () => {
    return(
        <motion.div 
        variants={pageAnimation} 
        initial="hidden" 
        animate="show"
        style={{ background: "#fff" }}>
            <h1>Our CONTACT</h1>
        </motion.div>
    )
}

export default ContactUs