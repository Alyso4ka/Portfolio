import React from 'react';
import styles from './Skill.module.css';
import Item from "../../Item/Item";

const Skill = (props) => {
    return (
        <div className={styles.skill}>
            <div className={styles.skillBackground} >
                <Item size={props.size} icon={props.icon} className={props.className}/>
            </div>
            <h3> {props.name}</h3>
            <p>React — это JavaScript-библиотека для разработки пользовательского интерфейса.</p>
        </div>
    );

}


export default Skill;