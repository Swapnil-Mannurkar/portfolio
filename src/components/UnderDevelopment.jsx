import React from 'react'
import logo from '../logo.svg'
import './UnderDevelopment.css'

const UnderDevelopment = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This site is under development. Please click the link below to know more about me.
                </p>
                <a
                    className="App-link"
                    href="https://drive.google.com/file/d/1Qo1sIGY-76V2ofndnRatCKdGObWrTnUw/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Click here!
                </a>
            </header>
        </div>
    )
}

export default UnderDevelopment