import styles from '../../styles/skills.module.css'
import utilsStyles from '../../styles/utils.module.css'
import Skill from "@/components/skill/skill";

export default function Skills() {
    const frontend = ['/images/skill/react.svg'];
    const backend = ['/images/skill/java.svg', '/images/skill/spring.svg'];
    const deployment = ['/images/skill/Github.svg'];
    const etc = ['/images/skill/Github.svg']

    return (
        <div className={styles.container}>
            <div className={utilsStyles.title}>
                <p className={utilsStyles.p}>SKILLS</p>
            </div>
            <Skill title="Frontend" src={frontend}/>
            <Skill title="Backend" src={backend}/>
            <Skill title="Deployment" src={deployment}/>
            <Skill title="Etc" src={etc}/>
        </div>
    )
};