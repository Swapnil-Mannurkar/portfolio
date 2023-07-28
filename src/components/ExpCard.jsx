import React from 'react'
import './ExpCard.css'
import { FaGlobe, FaLaptop, FaNetworkWired } from 'react-icons/fa'

const iconStyle = {
    fontSize: '40px',
    width: '25%',
    alignself: 'center'
};

const ExpCard = (props) => {
    return (
        <div className='ExpCardCont'>
            <div className='iconDivStyle'>
                {getIcon(props.icon)}
            </div>
            <h2 className='ExpHead'>{props.title}</h2>
            <p className='ExpDetail'>{props.details}</p>
        </div >
    )
}

export default ExpCard

const getIcon = (iconName) => {
    switch (iconName) {
        case 'FaLaptop':
            return <FaLaptop style={iconStyle} />;
        case 'FaNetworkWired':
            return <FaNetworkWired style={iconStyle} />;
        case 'FaGlobe':
            return <FaGlobe style={iconStyle} />;
        default:
            return null;
    }
}