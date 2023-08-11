import React from 'react';
import './SkillCard.css';
import Skill from './Skill';
import skillsData from './SkillsData.json';

const ExpCard = () => {
    return (
        <div className='SkillCardCont'>
            {skillsData.map((skill, index) => (
                <Skill
                    key={index}
                    skill={skill.icon}
                    name={skill.name}
                    year={skill.year}
                    level={skill.level}
                />
            ))}
        </div>
    );
};

export default ExpCard;
