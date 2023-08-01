import React from 'react'
import './Experience.css'
import SkillCard from './SkillCard'
import ExpCard from './ExpCard'
import ExpData from './ExpData.json'

const Experience = () => {
    return (
        <>
            <h1 className='ExpHeader'>EXPERIENCE</h1>
            <h2 className='ExpSubHeader'>As a Frontend Web Developer</h2>
            <div className='ExpContainer' id="experience-section">
                <div className='ExpCont'>
                    <SkillCard />
                </div>
                <div className='ExpInfoCont'>
                    {/* <div className='InfoCard'> */}
                    {ExpData.map((exp, index) => (
                        <ExpCard
                            key={index}
                            icon={exp.icon}
                            title={exp.title}
                            details={exp.details}
                        />
                    ))}
                    {/* </div>
                    <div className='InfoCard'>
                        <ExpCard />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Experience