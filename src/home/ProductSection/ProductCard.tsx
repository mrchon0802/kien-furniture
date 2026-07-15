// home/ProductSection/ProductCard.tsx

"use client";

import styles from "./ProductCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { roomMap } from "@/lib/constants";

export type Product = {
  productId: string;
  title: string;
  category: string;
  price: number;
  image: string;
  room?: string[];
  colors?: any[];
  badge?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/san-pham/${product.productId}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.body}>
        {product.badge && <span className={styles.badge}>{product.badge}</span>}

        <div className={styles.name}>{product.title}</div>
        <div className={styles.category}>
          {product.room?.map((r) => roomMap[r]).join(", ")}
        </div>
        <div className={styles.footer}>
          <div className={styles.price}>{product.price.toLocaleString()}đ</div>

          <button
            className={styles.addBtn}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // TODO: xử lý thêm vào giỏ hàng ở đây
            }}
          >
            +
          </button>
        </div>
      </div>
    </Link>
  );
}
