// home/CategoryGrid/CategoryGrid.tsx
import Link from "next/link";
import styles from "./CategoryGrid.module.css";
import type { ProductType } from "@/type/ProductType";
import { categoryMap } from "@/lib/constants";

interface CategoryGridProps {
  products: ProductType[];
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  sofa: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect
        x="2"
        y="12"
        width="18"
        height="6"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <rect
        x="5"
        y="8"
        width="12"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  ),
  bed: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect
        x="2"
        y="6"
        width="18"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line
        x1="2"
        y1="10"
        x2="20"
        y2="10"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  ),
  cabinet: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect
        x="3"
        y="3"
        width="16"
        height="16"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line
        x1="11"
        y1="3"
        x2="11"
        y2="19"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="9" cy="11" r="0.6" fill="currentColor" />
      <circle cx="13" cy="11" r="0.6" fill="currentColor" />
    </svg>
  ),
  table: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect
        x="3"
        y="7"
        width="16"
        height="10"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line
        x1="3"
        y1="11"
        x2="19"
        y2="11"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  ),
  chair: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M5 3v9M17 3v9M5 12h12v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line
        x1="6"
        y1="17"
        x2="6"
        y2="20"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="16"
        y1="17"
        x2="16"
        y2="20"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  ),
  other: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="9" r="4" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M11 13v6M8 19h6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export default function CategoryGrid({ products }: CategoryGridProps) {
  const counts = products.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc;
  }, {});

  const categories = Object.keys(categoryMap)
    .filter((cat) => counts[cat] > 0)
    .map((cat) => ({
      id: cat,
      name: categoryMap[cat],
      count: counts[cat],
      icon: CATEGORY_ICONS[cat],
    }));

  if (categories.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Danh mục nổi bật</h2>
      </div>

      <div className={styles.grid}>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/san-pham?category=${cat.id}`}
            className={styles.card}
          >
            <div className={styles.icon}>{cat.icon}</div>
            <div className={styles.name}>{cat.name}</div>
            <div className={styles.count}>{cat.count} sản phẩm</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
