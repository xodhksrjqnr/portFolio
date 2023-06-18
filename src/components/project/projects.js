import styles from '../../styles/projects.module.css'
import utilsStyles from '../../styles/utils.module.css'
import Project from "@/components/project/project";

import Smart from '../../../json/project/smart.json'
import Portfolio from '../../../json/project/portfolio.json'
import Benefit from '../../../json/project/suitable-benefit.json'

export default function Projects() {
    return (
        <div className={styles.container}>
            <div className={utilsStyles.title}>
                <p className={utilsStyles.p}>PROJECTS</p>
            </div>
            <Project project={Benefit}/>
            <Project project={Portfolio}/>
            <Project project={Smart}/>
        </div>
    )
};
