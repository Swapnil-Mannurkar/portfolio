import React, { useState } from 'react';
import Modal from 'react-modal';
import './ProjectCard.css'
import Invento from '../images/Invento.jpg'
import IRSS from '../images/IRSecurity.jpg'
import KLE from '../images/KLE.png'
import MMEC from '../images/MMEC.png'
import LMS from '../images/LMS.png'

const ProjectCard = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='ProCardContainer'>
                <div className='ProImageCont'>
                    <img src={getImage(props.title)} alt='project' onClick={toggleModal} />
                    <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Image Popup" className="modal" overlayClassName="overlay">
                        <button className="close-button" onClick={toggleModal}>
                            X
                        </button>
                        <img src={getImage(props.title)} alt='project' className="modal-image" />
                    </Modal>
                </div>
                <div className='ProCardContent'>
                    <h4>{props.title}</h4>
                    <p>
                        {props.desc}
                    </p>
                    <a href={props.link} rel="noreferrer" target='_blank' className='learnMore'>Learn more...</a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard

const getImage = (title) => {
    switch (title) {
        case "Invento 2023": return Invento;
        case "IR Security System": return IRSS;
        case "Leave Management System": return LMS;
        case "M. M. Engineering College": return MMEC;
        case "KLE Dr. M. S. S. CET": return KLE;
        default: break;
    }
}