// components/productdetail/SuggestProduct.tsx
"use client";

import Link from "next/link";
import styles from "./styles/productDetail.module.css";
import type { ProductType } from "@/type/ProductType";

interface SuggestProductProps {
  products: ProductType[]; // danh sách đã lọc sẵn theo room + limit từ page.tsx
}

export default function SuggestProduct({ products }: SuggestProductProps) {
  if (!products || products.length === 0) return null;

  return (
    <div className={styles.related}>
      <h2 className={styles.relatedTitle}>Sản phẩm liên quan</h2>
      <div className={styles.relatedGrid}>
        {products.map((p) => (
          <Link
            key={p.productId}
            href={`/san-pham/${p.productId}`}
            className={styles.relCard}
          >
            <div className={styles.relImg}>
              <img src={p.image} alt={p.title} className={styles.relImgEl} />
            </div>
            <div className={styles.relBody}>
              <p className={styles.relName}>{p.title}</p>
              <p className={styles.relPrice}>
                {(p.discountPrice ?? p.price).toLocaleString("vi-VN")}đ
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
