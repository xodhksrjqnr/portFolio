import styles from '../../styles/skills.module.css'
import utilsStyles from '../../styles/utils.module.css'
import Skill from '../../../json/skill/skill.json'
import Image from "next/image";

export default function Skills() {
    return (
        <div className={styles.container}>
            <div className={utilsStyles.title}>
                <p className={utilsStyles.p}>SKILLS</p>
            </div>
            {Skill.skills.map((skill) => (
                <div key={skill.type} className={styles.list}>
                    <div className={styles.name}>
                        <p>{skill.type}</p>
                    </div>
                    <div className={styles.content}>
                        {skill.values.map((img) => (
                            <div key={img} className={styles.img}>
                                <Image src={img} fill alt={img}/>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
};