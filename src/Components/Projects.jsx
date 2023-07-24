import React from 'react'
import './Projects.css'
import Heading from './Heading'
import ProjectCard from './ProjectCard'
import { projectArr } from '../constants'

const Projects = () => {

  return (
    <section id="projects">
      <Heading title="My Projects" subTitle="View My Projects" />
      <div className="content">
        {
          projectArr.map((project)=>{
            return <ProjectCard {...project} key={project.name}/>
          })
        }
      </div>
    </section>
  )
}

export default Projects