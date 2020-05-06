import React from 'react';
import styles from './Projects.module.css';
import Work from "./Work/Work";

class Projects extends React.Component {

    state = {
        imgItem: [
            {img: "https://c7.hotpng.com/preview/601/347/796/social-media-social-networking-service-icon-creative-social-network-background-vector-material-magnifying-glass-image.jpg",
                title: "Социальная сеть"},

            {img: "https://cdn3.iconfinder.com/data/icons/project-management-49/50/41-512.png",
                title: "TodoList"},

        ]
    }

    render() {
        let projectItem = this.state.imgItem.map( p =>  <Work img={p.img} title={p.title} />)

        return (
            <div className={styles.projects}>
                <div className={styles.container}>
                    <div className={styles.myProjects}>
                    <h2 className={styles.head}>Мои работы</h2>
                    <div className={styles.line}></div>
                    <div className={styles.allWorks}>
                        {projectItem}


                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Projects;