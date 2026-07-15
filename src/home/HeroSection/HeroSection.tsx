import Link from "next/link";
import styles from "./HeroSection.module.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <span className={styles.tag}>Bộ sưu tập 2026</span>
        <h1 className={styles.title}>
          Không gian sống
          <br />
          <em>tinh tế & bền vững</em>
        </h1>
        <p className={styles.sub}>
          Nội thất cao cấp chọn lọc từ các xưởng thủ công uy tín. Thiết kế tối
          giản, chất liệu tự nhiên, bền đẹp theo thời gian.
        </p>
        <div className={styles.btns}>
          <Link href="/products" className={styles.btnPrimary}>
            Khám phá ngay
          </Link>
          <button className={styles.btnOutline}>Xem lookbook</button>
        </div>
      </div>

      <div className={styles.heroRight}>
        <Image
          src="/images/ban-tra-phong-khach.png"
          alt="Bàn trà phòng khách"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 75vw"
          className={styles.roomImage}
        />
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Giao hàng miễn phí toàn quốc
        </div>
      </div>
    </section>
  );
}
