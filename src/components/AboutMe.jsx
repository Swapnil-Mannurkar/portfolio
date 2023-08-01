import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className='AMContainer' id="about-me-section">
      <div className='AMImgCont'>
      </div>
      <div className='AMInfoCont'>
        <h1>ABOUT</h1>
        <h2>Frontend Web Developer</h2>
        <div className='AMInfoContent'>
          <p>I'm a passionate developer who loves programming and I'm intrested in full stack web development and software development. I have experience working with HTML, CSS, JavaScript, MySQL, PHP, WordPress and Python.</p>
          <p>I have worked as a frontend web developer both as a freelancer and at <a href='https://www.tokskill.com' rel='noreferrer' target='_blank' style={{ textDecoration: 'none', color: 'lightblue' }}>TokSkill</a> as an intern.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe