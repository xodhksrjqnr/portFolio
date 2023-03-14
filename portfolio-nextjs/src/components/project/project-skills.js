import styles from '../../styles/projects.module.css'
import Image from "next/image";

export default function ProjectSkills({skills}) {
    return (
        <table className={styles.projectSkills}>
            <tbody>
                {skills.map((skill)=> (
                    <tr key={skill.id}>
                        <td key={skill.name}><p>{skill.name}</p></td>
                        <td key={skill.name + '_icon'}>
                            {skill.icons.map((icon) => (
                                <Image key={icon} src={icon} width={40} height={40} alt={icon}/>
                            ))}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};