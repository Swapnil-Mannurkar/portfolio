import React, { useState } from "react";
import Modal from "react-modal";
import "./ProjectCard.css";
import Invento from "../../images/Invento.png";
import IRSS from "../../images/IRSecurity.png";
import KLE from "../../images/KLE.png";
import MMEC from "../../images/MMEC.png";
import LMS from "../../images/LMS.png";
import Dashboard from "../../images/Dashboard.png";
import eCommerce from "../../images/E-Commerce.png"
import { FaTimes, FaEye } from "react-icons/fa";

const ProjectCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="ProCardContainer">
        <div className="ProImageCont">
          <img
            src={getImage(props.title)}
            alt="project"
            onClick={toggleModal}
          />
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="Image Popup"
            className="modal"
            overlayClassName="overlay"
          >
            <button className="close-button" onClick={toggleModal}>
              <FaTimes />
            </button>
            <img
              src={getImage(props.title)}
              alt="project"
              className="modal-image"
            />
          </Modal>
        </div>
        <div className="ProCardContent">
          <h4>{props.title}</h4>
          <p>{props.desc}</p>
          <a
            href={props.link}
            rel="noreferrer"
            target="_blank"
            className="learnMore"
          >
            View Project&nbsp;&nbsp;
            <FaEye />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

const getImage = (title) => {
  switch (title) {
    case "Invento 2023":
      return Invento;
    case "IR Security System":
      return IRSS;
    case "Leave Management System":
      return LMS;
    case "M. M. Engineering College":
      return MMEC;
    case "KLE Dr. M. S. S. CET":
      return KLE;
    case "Google authentication dashboard":
      return Dashboard;
    case "Basic E-Commerce Website":
      return eCommerce;
    default:
      break;
  }
};
