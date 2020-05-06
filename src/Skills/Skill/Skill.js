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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, ad aliquid amet autem consequatur debitis deleniti explicabo facilis, harum id perferendis possimus, provident quaerat quasi repellendus saepe velit voluptatum.</p>
        </div>
    );

}


export default Skill;