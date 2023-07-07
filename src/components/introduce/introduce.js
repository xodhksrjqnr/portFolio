import Image from "next/image";
import styles from '../../styles/introduce.module.css'
import utilsStyles from '../../styles/utils.module.css'
import URLS from "../../../json/introduce/introduce.json";
import Link from "next/link";

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
            <p className={utilsStyles.headingLg}>기술을 이해하는 데 있어 가장 기본이 되는 것은 Doc이라고 생각하여, 이를 번역, 정리하는 블로그를 운영하고 있습니다.</p>
            <div className={styles.url}>
                {URLS.url.map((u) => (
                    <div key={u.image}>
                        <Link href={u.link} target='_blank'>
                            <Image src={u.image} width={40} height={40} alt={u.image}/>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};