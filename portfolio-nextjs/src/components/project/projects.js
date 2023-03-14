import styles from '../../styles/projects.module.css'
import utilsStyles from '../../styles/utils.module.css'
import Project from "@/components/project/project";
import Smart from '../../../json/projectJson/smart.json'

export default function Projects() {
    return (
        <div className={styles.container}>
            <div className={utilsStyles.title}>
                <p className={utilsStyles.p}>PROJECTS</p>
            </div>
            <Project project={Smart}/>
        </div>
    )
};
