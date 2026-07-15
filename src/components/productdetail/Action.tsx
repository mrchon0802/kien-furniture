"use client";

import { useState } from "react";
import styles from "./styles/productDetail.module.css";
import type { ProductType } from "@/type/ProductType";

interface ActionsProps {
  product: ProductType;
  onAddToCart?: (product: ProductType, qty: number) => void;
  onBuyNow?: (product: ProductType, qty: number) => void;
  onWishlist?: (product: ProductType) => void;
}

export default function Actions({
  product,
  onAddToCart,
  onBuyNow,
  onWishlist,
}: ActionsProps) {
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  const handleWishlist = () => {
    setWishlisted((w) => !w);
    onWishlist?.(product);
  };

  return (
    <>
      {/* Qty */}
      <div>
        <p className={styles.optLabel}>Số lượng</p>
        <div className={styles.qtyRow}>
          <div className={styles.qtyCtrl}>
            <button
              className={styles.qtyBtn}
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              aria-label="Giảm số lượng"
            >
              −
            </button>
            <span className={styles.qtyVal}>{qty}</span>
            <button
              className={styles.qtyBtn}
              onClick={() => setQty((q) => Math.min(18, q + 1))}
              aria-label="Tăng số lượng"
            >
              +
            </button>
          </div>
          <span className={styles.stock}>✓ Còn hàng · 18 sản phẩm</span>
        </div>
      </div>

      {/* CTAs */}
      <div className={styles.ctaRow}>
        <button
          className={styles.btnCart}
          onClick={() => onAddToCart?.(product, qty)}
        >
          Thêm vào giỏ hàng
        </button>
        <button
          className={`${styles.btnWish} ${wishlisted ? styles.btnWishActive : ""}`}
          onClick={handleWishlist}
          aria-label="Yêu thích"
          aria-pressed={wishlisted}
        >
          ♥
        </button>
      </div>
      <button
        className={styles.btnBuy}
        onClick={() => onBuyNow?.(product, qty)}
      >
        Mua ngay
      </button>
    </>
  );
}
