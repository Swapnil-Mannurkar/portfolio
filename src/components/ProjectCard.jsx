import React from 'react'
import './ProjectCard.css'
import Invento from '../images/Invento.jpg'
import IRSS from '../images/IRSecurity.jpg'
import KLE from '../images/KLE.png'
import MMEC from '../images/MMEC.png'
import LMS from '../images/LMS.png'

const ProjectCard = (props) => {
    return (
        <>
            <div className='ProCardContainer'>
                <div className='ProImageCont'>
                    <img src={getImage(props.title)} alt='project' ></img>
                </div>
                <div className='ProCardContent'>
                    <h1>{props.title}</h1>
                    <p>
                        {props.desc}
                    </p>
                    <a href={props.link} target='_blank' style={{textDecoration: 'none', color: 'lightblue'}}>Learn more...</a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard

const getImage = (title) => {
    switch (title) {
        case "Invento": return Invento;
        case "IR Security System": return IRSS;
        case "Leave Management System": return LMS;
        case "M.M.Engineering College": return MMEC;
        case "KLE Dr.M.S.S.CET": return KLE;
    }
}