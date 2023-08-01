import React from 'react'
import './ContactMe.css'
import { WhatsApp, LinkedIn, Instagram, Email } from '@mui/icons-material'

const socialIcon = {
    fontSize: '30px',
    background: '#000',
    padding: '10px',
    borderRadius: '25px'
};

const socialEmail = {
    fontSize: '30px'
}

const ContactMe = () => {
    return (
        <div className='ContactCont'>
            <div>
                <h1 className='ContactTitle'>Contact me</h1>
            </div>
            <div className='ContactSocial'>
                <div className='ContactSocialIcons'>
                    <LinkedIn sx={socialIcon} />
                    <WhatsApp sx={socialIcon} />
                    <Instagram sx={socialIcon} />
                </div>
                <div className='ContactSocialEmail'>
                    <Email sx={socialEmail} />&nbsp;<span style={{marginTop: '2px'}}>mannurkarswapnil@gmail.com</span>
                </div>
            </div>
            <div className='ConatctCopyright'>
                Copyright ©2023 All rights reserved | This template is made with ❤️ by me
            </div>
        </div>
    )
}

export default ContactMe