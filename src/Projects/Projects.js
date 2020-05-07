import React from 'react';
import styles from './Projects.module.css';
import Work from "./Work/Work";


class Projects extends React.Component {

    state = {
        divStyle: [
            {background: "https://c7.hotpng.com/preview/601/347/796/social-media-social-networking-service-icon-creative-social-network-background-vector-material-magnifying-glass-image.jpg", title: "Социальная сеть"},
            {background: "https://cdn3.iconfinder.com/data/icons/project-management-49/50/41-512.png", title: "TodoList"},
            {background: "https://fitlabs.ru/wp-content/uploads/2014/11/1%D0%B0.jpg", title: "Счетчик"},
        ]
    }

    render() {
        let project = this.state.divStyle.map( p =>  <Work background={p.background} title={p.title} />)
        return (
            <div className={styles.projects}>
                <div className={styles.container}>

                    <div className={styles.myProjects}>
                        <h2 className={styles.head}> Мои <span>проекты</span></h2>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.allWorks}>
                        {project}
                    </div>
                </div>
            </div>

        );
    }
}

export default Projects;