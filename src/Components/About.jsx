import React from 'react'
import './About.css'
import Heading from './Heading'
import hero from '../assets/hero2.png'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import pdf from '../assets/Abhishek.pdf'
import { userDetails } from '../constants'

const About = () => {
  const {image, description } = userDetails;
  return (
    <section id="about" className='about padding'>
      <Heading id="heading" title="About Me" subTitle="Who I Am" />
      <div className="content">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          className="left">
          <img src={hero} alt="" />
        </motion.div >
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          className="right">
          <div className="logo">
            <img src={image} alt="user-img" />
          </div>
          <div className="main-content">
            <h1>Hello, I am Abhishek</h1>
            <h3>I am a &nbsp;
              <TypeAnimation
                sequence={
                  ['Web Developer', 2000, 'Programmer', 2000, 'Leetcoder', 2000, "Student", 2000]
                }
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </h3>
            <p>{description}</p>
            <div className="cv-btn">
              <a href={pdf} target='_blank' rel="noreferrer">View CV</a>
            </div>
          </div>
        </motion.div>
      </div >
    </section >
  )
}

export default About