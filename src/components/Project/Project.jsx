import React from 'react'
import "./Project.css"
import {Typography} from "@mui/material"
import { AiOutlineProject } from 'react-icons/ai'


const ProjectCard = ({
    url,projectImage,ProjectTitle,description,technologies,isAdmin= false,
})=>{
    return(
        <>
            <a href={url} className='projectCard' target='_blank'>
                <div>
                <img src={projectImage} alt="project" />
                    <Typography variant='h5'>{ProjectTitle}</Typography>
                </div>
                <div>
                    <Typography variant='h4'>About Project</Typography>
                    <Typography variant='h6'>{description}</Typography>
                    <Typography variant='h6'>Tech Stack : {technologies}</Typography>
                </div>
            </a>
        </>
    )
}
const Project = () => {
    const projects = []
  return (
    <div className='projects'>
      <Typography variant='h3'>Projects <AiOutlineProject/></Typography>
      <div className='projectWrapper'>
        {
            projects.map((project,index)=>(
                <ProjectCard/>
            ))
        }
      </div>
    </div>
  )
}
import "./Project.css"
export default Project
