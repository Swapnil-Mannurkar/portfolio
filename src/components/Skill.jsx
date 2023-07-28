import React from 'react'
import './Skill.css'
import { FaReact, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import MySQL from '../images/mysql.png'

const iconStyle = {
    fontSize: '40px',
    justifySelf: 'center',
    alignSelf: 'center',
    width: '100%',
};

const mysqlStyle = {
    width: '45px',
    filter: 'grayscale(0%) brightness(0%)'
};

const Skill = (props) => {
    return (
        <div className='skillSect'>
            <div className='iconSect'>
                {getIcon(props.skill)}
                {props.name}
            </div>
            <div className='skillExp'>
                <p>{props.year}</p>
                <p>{props.level}</p>
            </div>
        </div>
    )

}

export default Skill

const getIcon = (iconName) => {
    switch (iconName) {
        case 'FaHtml5':
            return <FaHtml5 style={iconStyle} />;
        case 'FaCss3':
            return <FaCss3 style={iconStyle} />;
        case 'FaJs':
            return <FaJs style={iconStyle} />;
        case 'FaReact':
            return <FaReact style={iconStyle} />;
        case 'MySQL':
            return <div style={{ width: '100%' }}><img src={MySQL} style={mysqlStyle} height={'45px'} alt='SQL logo'/></div>;
        default:
            return null;
    }
};