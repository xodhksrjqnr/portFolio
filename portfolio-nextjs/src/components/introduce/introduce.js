import Image from "next/image";
import styles from '../../styles/introduce.module.css'
import utilsStyles from '../../styles/utils.module.css'

export default function Introduce() {
    return (
        <div className={styles.container}>
            <h1 className={utilsStyles.heading2Xl}>Backend Developer</h1>
            <Image
                src="/images/profile.png"
                priority
                className={styles.borderCircle}
                width={144}
                height={144}
                alt="introduce"
            />
            <h1 className={utilsStyles.headingLg}>KIM TAEWAN</h1>
            <p className={utilsStyles.p}>

            </p>
        </div>
    )
};