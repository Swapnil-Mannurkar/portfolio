import React from 'react'
import './Experience.css'
import SkillCard from './SkillCard'
import ExpCard from './ExpCard'
import ExpData from './ExpData.json'

const Experience = () => {
    return (
        <>
            <h1 className='ExpHeader' id="experience-section">EXPERIENCE</h1>
            <div className='ExpContainer'>
                <div className='ExpCont'>
                    <SkillCard />
                </div>
                <div className='ExpInfoCont'>
                    {ExpData.map((exp, index) => (
                        <ExpCard
                            key={index}
                            icon={exp.icon}
                            title={exp.title}
                            details={exp.details}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Experience