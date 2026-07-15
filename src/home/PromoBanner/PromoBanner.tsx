import styles from "./PromoBanner.module.css";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  buttonText: string;
};

export default function PromoBanner({ title, subtitle, buttonText }: Props) {
  return (
    <div className={styles.banner}>
      <div className={styles.glow} />

      <div className={styles.left}>
        <div className={styles.label}>
          <span className={styles.dot} />
          Ưu đãi đặc biệt
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.sub}>{subtitle}</p>

        <Link href="/san-pham" className={styles.button}>
          {buttonText}
        </Link>
      </div>

      <div className={styles.right}>
        <svg viewBox="0 0 200 160" className={styles.illustration}>
          <path
            d="M30 100 Q30 80 50 80 L150 80 Q170 80 170 100 L170 125 Q170 132 163 132 L37 132 Q30 132 30 125 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M40 80 L40 55 Q40 45 50 45 L70 45 Q78 45 78 55 L78 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M122 80 L122 55 Q122 45 132 45 L150 45 Q160 45 160 55 L160 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line
            x1="35"
            y1="132"
            x2="35"
            y2="145"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line
            x1="165"
            y1="132"
            x2="165"
            y2="145"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
}
