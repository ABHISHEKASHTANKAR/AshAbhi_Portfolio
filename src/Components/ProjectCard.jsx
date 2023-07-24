import React from 'react'
import './ProjectCard.css'
import {motion} from 'framer-motion';
import { zoomIn } from '../variants';
import {HiArrowSmRight, HiCode} from 'react-icons/hi'

const ProjectCard = ({name, projectLink, codeLink, description, image}) => {
  console.log(image);
  return (
    <>
      <motion.div 
      variants={zoomIn(0.3)}
      initial = "hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.7}}
      className='project-card'>
        <div className="poster">
          <img src={image} alt="project-img" />
        </div>
        <div className="card-content">
          <h1>{name}</h1>
          <p>{description}</p>
          <div className="btn-container">
            <a href={projectLink} target='blank'>Visit <HiArrowSmRight className='icon'/></a>
            <a href={codeLink} target='blank'>Code <HiCode className='icon'/></a>
          </div>
        </div>
      </motion.div>
    </>

  )
}

export default ProjectCard