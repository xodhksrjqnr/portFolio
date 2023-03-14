import Image from "next/image";
import styles from "../../styles/footer.module.css"
import Link from "next/link";

export default function FooterImg(props) {
    return (
        <div className={styles.footerImg}>
            <Link href={props.link}>
                <Image src={props.src} width={60} height={60} alt={props.src}/>
            </Link>
        </div>
    )
};