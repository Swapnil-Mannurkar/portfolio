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
        <div className='ContactCont' id='contact_me'>
            <div>
                <h1 className='ContactTitle'>Contact me</h1>
            </div>
            <div className='ContactSocial'>
                <div className='ContactSocialIcons'>
                    <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/swapnil-mannurkar-10ba14247/">
                        <LinkedIn sx={socialIcon} />
                    </a>
                    <a target='_blank' rel='noreferrer' href="https://wa.me/9242239078">
                        <WhatsApp sx={socialIcon} />
                    </a>
                    <a target='_blank' rel='noreferrer' href="https://www.instagram.com/_.c_r_a_z_e._/">
                        <Instagram sx={socialIcon} />
                    </a>
                </div>
                <div className='ContactSocialEmail'>
                    <Email sx={socialEmail} />&nbsp;<a href="mailto:mannurkarswapnil@gmail.com" target='_blank' rel='noreferrer' className='emailLink'>mannurkarswapnil@gmail.com</a>
                </div>
            </div>
            <div className='ConatctCopyright'>
                Copyright ©2023 All rights reserved | This template is made with ❤️ by me
            </div>
        </div>
    )
}

export default ContactMe