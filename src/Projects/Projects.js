import React from 'react';
import styles from './Projects.module.css';
import Works from "./Works/Works";

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                Мои работы
                <div className={styles.allWorks}>

                    <Works/>
                    <Works/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
