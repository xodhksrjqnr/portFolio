import styles from '../../styles/projects.module.css'
import utilsStyles from '../../styles/utils.module.css'
import Image from "next/image";
import ProjectSkills from "@/components/project/project-skills";
import ProjectDetail from "@/components/project/project-detail";

export default function Project({project}) {
    return (
        <div className={styles.project}>
            <div>
                <p className={utilsStyles.headingTitle}>{project.title}</p>
                <p className={utilsStyles.headingSubTitle}>{project.subtitle}</p>
            </div>
            <div className={styles.body}>
                <div className={styles.img}>
                    <Image src={project.thumbnail} fill alt={project.thumbnail}/>
                </div>
                <div className={styles.content}>
                    {project.introduces.map((paragraph) => (
                        <p key={paragraph} className={styles.introduce}>{paragraph}</p>
                    ))}
                    <p className={styles.projectP}>주요 기능</p>
                    {project.functions.map((func) => (
                        <p key={func}>• {func}</p>
                    ))}
                    <ProjectSkills skills={project.skills}/>
                </div>
            </div>
            <ProjectDetail gitLink={project.git} openURL={project.openURL}/>
        </div>
    )
};