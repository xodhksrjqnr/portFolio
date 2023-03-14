import styles from '../../styles/projects.module.css'
import Image from "next/image";

export default function ProjectSkills({skills}) {
    return (
        <table className={styles.projectSkills}>
            <tbody>
                {skills.map((skill)=> (
                    <tr key={skill.id}>
                        <td key={skill.name}><p>{skill.name}</p></td>
                        <td key={skill.name + '_icon'} className={styles.skillImg}>
                            {skill.icons.map((icon) => (
                                <div key={icon}>
                                    <Image src={icon} fill alt={icon} priority/>
                                </div>
                            ))}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};