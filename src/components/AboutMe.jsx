import React from 'react'
import './AboutMe.css'
import Img from '../images/About.jpg'

const AboutMe = () => {
  return (
    <div className='AMContainer'>
      <div className='AMImgCont'>

      </div>
      <div className='AMInfoCont'>
        <h1>ABOUT</h1>
        <h2>I'm a frontend web developer</h2>
        <div className='AMInfoContent'>
          <p>I'm a passionate developer who loves programming and I'm intrested in full stack web development and software development. I have experience working with HTML, CSS, JavaScript, MySQL, PHP, WordPress and Python.</p>
          <p>I have worked as a freelancer for an year and I am currently working at TokSkill as a frontend web developer - Intern</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe