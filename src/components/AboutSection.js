import React from 'react'
import home1 from '../img/home1.png'
//Styled
import {About, Description, Image, Hide} from '../styles'
//Framer Motion
import { motion } from 'framer-motion'
import { titleAnim, fade, photoAnim } from "../animation"
import Wave from './Wave'

const AboutSection = () => {    
    return (
        <About>
            <Description>
                <motion.div >
                    <Hide>
                        <motion.h2 variants={titleAnim}
                        >Hello,</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            I Am </motion.h2>
                    </Hide>
                    <Hide>
                    <motion.h2 variants={titleAnim}
                        >Alyssa <span>DeMay</span></motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>FULL-STACK SOFTWARE ENGINEER</motion.p>
                <motion.button variants={fade}>Contact</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="guy with a camera"/>
                </Image>
                <Wave />
                </About >
    )
}


export default AboutSection