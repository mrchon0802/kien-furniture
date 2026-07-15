"use client";

import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.css";
import Link from "next/link";

interface Product {
  productId: string;
  image: string;
  title: string;
  price: number;
}

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className={styles.container}>
      <h1>Các sản phẩm nổi bật</h1>
      <section className={styles.grid}>
        {products.map((product) => (
          <Link key={product.productId} href={`/product/${product.productId}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </section>
    </div>
  );
}
