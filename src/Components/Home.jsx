import React from 'react'
import './Home.css';
import freelancer from '../assets/hero.png';


import { FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { FiInstagram, FiDownload } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

import {motion} from 'framer-motion'
import {fadeIn, zoomIn} from '../variants.js';
import {TypeAnimation} from 'react-type-animation'

import pdf from '../assets/Abhishek.pdf'

const Home = () => {
    return (
        <section id="home" className='home padding flex'>
            <motion.div 
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            className="content">
                <motion.h2
                 variants={fadeIn("right", 0.2)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{once:false, amount:0.7}}
                >Hey There,</motion.h2>
                <motion.h1
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
                >I'm <span>Abhishek Ashtankar</span></motion.h1>
                <motion.h3
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
                >And I'm a &nbsp;
                <TypeAnimation
                sequence={
                  ['Web Developer', 2000, 'Programmer', 2000, 'Leetcoder', 2000, "Student", 2000]
                }
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
                </motion.h3>
                <div className="btn-container">
                    <motion.a
                    variants={zoomIn(0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
                    href={pdf}
                    download = "Abhishek.pdf"
                    >Download CV <FiDownload className='icon' /></motion.a>
                </div>
            </motion.div>
            <motion.div 
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            className="banner">
                <img src={freelancer} alt="Hero" />
            </motion.div>

            <div className="social">
                <ul className='flex'>
                    <li><a href="https://github.com/ABHISHEKASHTANKAR"><FaGithub className='icon' /></a></li>

                    <li><a href="https://leetcode.com/ashtankarav/"><SiLeetcode className='icon' /></a></li>
                    <li><a href="https://www.instagram.com/_abhishek712_/"><FiInstagram className='icon' /></a></li>
                    <li><a href="https://wa.me/+918459976140/"><FaWhatsapp className='icon' /></a></li>

                    <li><a href="https://www.linkedin.com/in/abhishek-ashtankar-53768b23a/"><FaLinkedin className='icon' /></a></li>
                </ul>
            </div>
        </section>
    )
}

export default Home