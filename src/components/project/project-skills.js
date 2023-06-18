import styles from '../../styles/projects.module.css'
import Image from "next/image";

export default function ProjectSkills({skills}) {
    return (
        <table className={styles.projectSkills}>
            <tbody>
            <tr>
                {skills.map((skill)=> (
                    <td key={skill} className={styles.skillImg}>
                        <div className={styles.skillImgBox}>
                            <Image src={skill} fill alt={skill} priority/>
                        </div>
                    </td>
                ))}
            </tr>
            </tbody>
        </table>
    )
};