import styles from '../../styles/footer.module.css'
import footer from '../../../json/footer/footer.json'
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div className={styles.container}>
            {footer.footer.map((f) => (
                <div key={f.image} className={styles.footerImg}>
                    <Link href={f.link}>
                        <Image src={f.image} width={60} height={60} alt={f.image}/>
                    </Link>
                </div>
            ))}
        </div>
    )
};