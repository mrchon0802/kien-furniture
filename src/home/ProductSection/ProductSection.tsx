// components/ProductSection.tsx
import styles from "./ProductSection.module.css";
import ProductGrid from "./ProductGrid";
import type { Product } from "./ProductCard";
import Link from "next/link";

type Props = {
  title: string;
  products: Product[];
};

export default function ProductSection({ title, products }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <Link href="/san-pham" className={styles.link}>
          Xem tất cả
        </Link>
      </div>
      <ProductGrid products={products} />
    </section>
  );
}
