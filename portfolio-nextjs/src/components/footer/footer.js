import styles from '../../styles/footer.module.css'
import FooterImg from "@/components/footer/footer-img";

export default function Footer() {
    return (
        <div className={styles.container}>
            <FooterImg
                src={"/images/footer/github.svg"}
                link={"https://github.com/xodhksrjqnr"}
            />
            <FooterImg
                src={"/images/footer/tistory.svg"}
                link={"https://develop-library.tistory.com/"}
            />
        </div>
    )
};