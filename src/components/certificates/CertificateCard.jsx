import React from "react";
import "./CertificateCard.css";

const CertificateCard = (props) => {
  return (
    <div className="certificateCardContainer">
      <img src={props.image} width="90%" className="certificateImage" />
      <h4>{props.title}</h4>
    </div>
  );
};

export default CertificateCard;
