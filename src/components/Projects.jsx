import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'
import ProjectData from './ProjectData.json'

const Projects = () => {
    return (
        <div className='ProCont'>
            <h1 className='ExpHeader'>PROJECTS</h1>
            <h2 className='ExpSubHeader'>As a Developer</h2>
            <div className='ProContent'>
                {ProjectData.map((pro, index) => (
                    <ProjectCard key={index} title={pro.title} desc={pro.desc} link={pro.link} />
                ))}
                <div className='moreProject'>for more projects please&nbsp;<a href='https://github.com/Swapnil-Mannurkar?tab=repositories' target='_blank' style={{ textDecoration: 'none', color: 'lightblue' }}>click here...</a></div>
            </div>
        </div>
    )
}

export default Projects