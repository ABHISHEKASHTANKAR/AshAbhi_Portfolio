import React from 'react'
import './Skills.css'
import pic from '../assets/hero4.png'
import Heading from './Heading.jsx'


import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import {motion} from 'framer-motion' 
import {fadeIn} from '../variants';






import skill1 from '../assets/Skills/html5.png'
import skill2 from '../assets/Skills/css3.png'
import skill3 from '../assets/Skills/javascript.png'
import skill4 from '../assets/Skills/react.png'
import skill5 from '../assets/Skills/nodejs.png'
import skill6 from '../assets/Skills/mongodb.png'
import skill7 from '../assets/Skills/java.png'



const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section id="skills" ref={ref}>
      <Heading title="My Skills" subTitle="What I Know" />



      <div className="content">
        <motion.div 
        variants={fadeIn("right", 0.3)}
        initial = "hidden"
        whileInView={"show"}
        className="left">
          <div className="skills-items">
            <div className="item">
              <div className="logo">
                <img src={skill1} alt="" />
              </div>
              <div className="bar"><div className="inner-bar" style={{width : inView ? "80%" :  "0%"}}></div></div>
              <div className="percentage">
                80%
              </div>
            </div>
            <div className="item">
              <div className="logo">
                <img src={skill2} alt="" />
              </div>
              <div className="bar"><div className="inner-bar" style={{width : inView ? "85%" :  "0%"}}></div></div>
              <div className="percentage">
                85%
              </div>
            </div>
            <div className="item">
              <div className="logo">
                <img src={skill3} style = {{width : "65%"}} alt="" />
              </div>
              <div className="bar"><div className="inner-bar" style={{width : inView ? "75%" :  "0%"}}></div></div>
              <div className="percentage">
                75%
              </div>
            </div>
            <div className="item">
              <div className="logo">
                <img src={skill4} style = {{width : "100%"}}alt="" />
              </div>
              <div className="bar"><div className="inner-bar" style={{width : inView ? "80%" :  "0%"}}></div></div>
              <div className="percentage">
                80%
              </div>
            </div>
            <div className="item">
              <div className="logo">
                <img src={skill5} alt="" />
              </div>
              <div className="bar"><div className="inner-bar" style={{width : inView ? "70%" :  "0%"}}></div></div>
              <div className="percentage">
                70%
              </div>
            </div>
            <div className="item">
              <div className="logo">
                <img src={skill6} alt="" />
              </div>
              <div className="bar"><div className="inner-bar" style={{width : inView ? "75%" :  "0%"}}></div></div>
              <div className="percentage">
                75%
              </div>
            </div>
            <div className="item">
              <div className="logo">
                <img src={skill7} alt="" />
              </div>
              <div className="bar"><div className="inner-bar" style={{width : inView ? "85%" :  "0%"}}></div></div>
              <div className="percentage">
                85%
              </div>
            </div>
          </div>
          <div className="counter">
            <div className="item">
              <div className="number">
                {inView ? <CountUp start={100} end={350} duration={2} /> : 200}
                <span className='plus'>+</span>
              </div>
              <div className="text">
                Leetcode <span>Problems</span>
              </div>
            </div>
            <div className="item">
              <div className="number">
                {inView ? <CountUp start={0} end={15} duration={2} /> : 15}
                <span className='plus'>+</span>
              </div>
              <div className="text">
                Personal <span>Projects</span>
              </div>
            </div>
            <div className="item">
              <div className="number">
                {inView ? <CountUp start={100} end={250} duration={2} /> : 200}
                <span className='plus'>+</span>
              </div>
              <div className="text">
                GFG <span>Problems</span>
              </div>
            </div>
          </div>          
        </motion.div>
        <motion.div 
        variants={fadeIn("left", 0.3)}
        initial = "hidden"
        whileInView={"show"}
        className="right">
          <img className="image" src={pic} alt="error" />
        </motion.div>
      </div>
    </section>
  )
}

export default Skills