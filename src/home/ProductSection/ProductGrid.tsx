// components/ProductGrid.tsx
import styles from "./ProductSection.module.css";
import ProductCard from "./ProductCard";
import type { Product } from "./ProductCard";

type Props = {
  title?: string;
  products: Product[];
};

export default function ProductGrid({ title, products }: Props) {
  return (
    <div>
      {title && <h1 className={styles.pageTitle}>{title}</h1>}
      <div className={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.productId} product={p} />
        ))}
      </div>
    </div>
  );
}
