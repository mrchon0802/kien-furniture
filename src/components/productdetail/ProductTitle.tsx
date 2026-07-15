"use client";

import styles from "./styles/productDetail.module.css";
import type { ProductType } from "@/type/ProductType";

interface StarsProps {
  rating: number;
  size?: number;
}

export function Stars({ rating, size = 14 }: StarsProps) {
  return (
    <span className={styles.stars} style={{ fontSize: size }}>
      {Array.from({ length: 5 }, (_, i) =>
        i < Math.round(rating) ? "★" : "☆",
      ).join("")}
    </span>
  );
}

interface ProductTitleProps {
  product: ProductType;
  avgRating: number;
  reviewCount: number;
}

export default function ProductTitle({
  product,
  avgRating,
  reviewCount,
}: ProductTitleProps) {
  return (
    <>
      <div className={styles.tagRow}>
        <span className={styles.tagNew}>Mới</span>
      </div>

      <div>
        <h1 className={styles.prodName}>{product.title}</h1>
        <p className={styles.prodSku}>
          Mã SP: {product.productId.toUpperCase()} · Thương hiệu: KIENNOITHAT
        </p>
      </div>

      <div className={styles.ratingRow}>
        <Stars rating={avgRating} />
        <span>{avgRating.toFixed(1)}</span>
        <span className={styles.dot}>·</span>
        <span>{reviewCount} đánh giá</span>
      </div>

      <div className={styles.priceRow}>
        <span className={styles.priceMain}>
          {product.price.toLocaleString("vi-VN")}đ
        </span>
      </div>
    </>
  );
}
