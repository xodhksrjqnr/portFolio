import styles from '../../styles/profile.module.css'
import utilsStyles from '../../styles/utils.module.css'
import Infos from '../../../json/profile/profile.json'
import Image from "next/image";

export default function Profile() {
    return (
        <div className={styles.container}>
            <div className={utilsStyles.title}>
                <p>PROFILE</p>
            </div>
            <table>
                <tbody>
                {Infos.profile.map((info) => (
                    <tr key={info.id}>
                        {info.values.map((i) => (
                            <td key={i.name}>
                                <div className={styles.content}>
                                    <div className={styles.img}>
                                        <Image src={i.svg} fill alt={i.svg}/>
                                    </div>
                                    <span>{i.value}</span>
                                </div>
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};