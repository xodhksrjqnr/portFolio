import styles from '../../styles/projects.module.css'
import Link from "next/link";

export default function ProjectDetail({gitLink, openURL}) {
    if (openURL === null) {
        return (
            <div className={styles.projectDetail}>
                <Link href={gitLink}>
                    <button>Github</button>
                </Link>
            </div>
        );
    } else {
        return (
            <div className={styles.projectDetail}>
                <Link href={gitLink}>
                    <button>Github</button>
                </Link>
                <Link href={openURL}>
                    <button>OpenURL</button>
                </Link>
            </div>
        );
    }
};