import styles from '../../styles/projects.module.css'
import Link from "next/link";

export default function ProjectDetail({gitLinks, openURL}) {
    if (openURL === null) {
        return (
            <div className={styles.projectDetail}>
                {gitLinks.map((link) => (
                    <Link key={link.name} href={link.url} target='_blank'>
                        <button>{link.name}</button>
                    </Link>
                ))}
            </div>
        );
    } else {
        return (
            <div className={styles.projectDetail}>
                {gitLinks.map((link) => (
                    <Link key={link.name} href={link.url} target='_blank'>
                        <button>{link.name}</button>
                    </Link>
                ))}
                <Link href={openURL} target='_blank'>
                    <button>OpenURL</button>
                </Link>
            </div>
        );
    }
};