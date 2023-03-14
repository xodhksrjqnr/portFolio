import styles from "@/styles/skills.module.css";
import SkillImg from "@/components/skill/skill-img";

export default function Skill(props) {
    return (
        <div className={styles.list}>
            <div className={styles.name}>
                <p>{props.title}</p>
            </div>
            <div className={styles.content}>
                {props.src.map((img) => (
                    <div className={styles.img}>
                        <SkillImg key={img} src={img}/>
                    </div>
                ))}
            </div>
        </div>
    );
};