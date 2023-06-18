import styles from '../../styles/skills.module.css'
import utilsStyles from '../../styles/utils.module.css'
// import Skill from '../../../json/skill/skill.json'
import Skill from '../../../json/skill/skill-text.json'
// import Image from "next/image";

export default function Skills() {
    return (
        <div className={styles.container}>
            <div className={utilsStyles.title}>
                <p className={utilsStyles.p}>SKILLS</p>
            </div>
            <table className={styles.table}>
                <tbody>
                <tr className={styles.tr}>
                {Skill.skills.map((skill) => (
                    <td key={skill.type}>{skill.type}</td>
                    // <div key={skill.type} className={styles.list}>
                    //     <div>
                    //         <p>{skill.type}</p>
                    //     </div>
                    //     <div>
                    //         {skill.values.map((img) => (
                    //             <div key={img} className={styles.text}>
                    //                 {img}
                    //             </div>
                    //         ))}
                    //     </div>
                    // </div>
                ))}
                </tr>
                <tr>
                    {Skill.skills.map((skill) => (
                        <td key={skill.type}>
                            {skill.values.map((name) => (
                                <div key={name} className={styles.text}>
                                    {name}
                                </div>
                            ))}
                        </td>
                    ))}
                </tr>
                </tbody>
            </table>
        </div>
    )
};