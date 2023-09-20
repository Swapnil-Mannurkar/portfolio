import "./Certificates.css";
import CertificateCard from "./CertificateCard";
import Reactjs from "../../images/Reactjs.jpg";
import SQL from "../../images/SQL.jpg";

const Certificates = () => {
  return (
    <div className="certificateContainer">
      <h1 className="ExpHeader">CERTIFICATES</h1>
      <div className="certificateCardsContainer">
        <CertificateCard
          title="React - The Complete Guide 2023 (incl. React Router & Redux)"
          image={Reactjs}
        />
        <CertificateCard
          title="SQL for Beginners: Learn SQL using MySQL and Database Design"
          image={SQL}
        />
      </div>
    </div>
  );
};

export default Certificates;
