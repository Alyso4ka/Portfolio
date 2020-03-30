import React from 'react';
import styles from './Skills.module.css';
import Skill from './Skill/Skill';

function Skills() {
    return (
        <div className={styles.skills}>

            <div className={styles.container}>
                <h2>Мои скиллы</h2>
                <div className={styles.allSkill}>

                    <Skill />
                    <Skill/>
                    <Skill/>


                </div>
            </div>
        </div>
    );
}

export default Skills;