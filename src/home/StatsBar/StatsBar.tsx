import styles from "./StatsBar.module.css";

const STATS = [
  { num: "2,400+", label: "Sản phẩm" },
  { num: "18,000+", label: "Khách hàng hài lòng" },
  { num: "5 năm", label: "Bảo hành" },
];

export default function StatsBar() {
  return (
    <div className={styles.container}>
      {STATS.map((stat) => (
        <div key={stat.label} className={styles.stat}>
          <div className={styles.num}>{stat.num}</div>
          <div className={styles.label}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
