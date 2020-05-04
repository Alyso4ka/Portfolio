import React from 'react';
import styles from './Skills.module.css';
import Skill from './Skill/Skill';

import {faCss3, faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";



class Skills extends React.Component {

    state = {
        iconItem: [
            {icon: faReact, className:styles.item, size: "4x", name: "REACT"},
            {icon: faJs, className:styles.item, size: "4x", name: "JAVASCRIPT"},
            {icon: faHtml5, className:styles.item, size: "4x", name: "HTML"},
            {icon: faCss3, className:styles.item, size: "4x", name: "CSS"},
        ]
    }


    render() {

        let  SkillItem = this.state.iconItem.map(i => <Skill icon={i.icon} className={i.className} size={i.size} name={i.name}/>  )

        return (
            <div className={styles.skills}>
                <div className={styles.container}>
                    <div className={styles.mySkills}>
                        <h2 className={styles.head}> Мои  скиллы </h2>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.allSkill}>
                        {SkillItem}
                    </div>
                </div>
            </div>

        );
    }
}

export default Skills;