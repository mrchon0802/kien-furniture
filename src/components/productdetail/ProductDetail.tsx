"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./styles/productDetail.module.css";
import type { ProductType } from "@/type/ProductType";
import { roomMap } from "@/lib/constants";

import ProductTitle from "./ProductTitle";
import ColorOption from "./ColorOption";
import MaterialOption from "./MaterialOption";
import Action from "./Action";
import Specs, { MOCK_REVIEWS, type Review } from "./Specs";
import SuggestProduct from "./SuggestProduct";

// ─── Types ───────────────────────────────────────────────────────────────────

interface RelatedProduct {
  productId: string;
  title: string;
  price: number;
  image: string;
}

interface ProductDetailProps {
  product: ProductType;
  relatedProducts?: ProductType[];
  reviews?: Review[];
  onAddToCart?: (product: ProductType, qty: number) => void;
  onBuyNow?: (product: ProductType, qty: number) => void;
  onWishlist?: (product: ProductType) => void;
}
// ─── Sub-components ──────────────────────────────────────────────────────────

function TrustBadges() {
  const badges = [
    { icon: "🔒", label: "Thanh toán", sub: "bảo mật" },
    { icon: "↩️", label: "Đổi trả", sub: "30 ngày" },
    { icon: "🛡️", label: "Bảo hành", sub: "5 năm" },
  ];
  return (
    <div className={styles.trustRow}>
      {badges.map((b) => (
        <div key={b.label} className={styles.trustItem}>
          <span className={styles.trustIcon}>{b.icon}</span>
          <span className={styles.trustTxt}>
            {b.label}
            <br />
            {b.sub}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function ProductDetail({
  product,
  reviews = MOCK_REVIEWS,
  relatedProducts,
  onAddToCart,
  onBuyNow,
  onWishlist,
}: ProductDetailProps) {
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  const currentImage =
    product.colors[activeColorIndex]?.productImage ?? product.image;

  const avgRating =
    reviews.reduce((s, r) => s + r.rating, 0) / (reviews.length || 1);

  return (
    <div className={styles.root}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Trang chủ</Link>
        <span className={styles.sep}>›</span>
        <Link href={`/san-pham?room=${product.room[0]}`}>
          {roomMap[product.room[0]] ?? product.room[0]}
        </Link>
        <span className={styles.sep}>›</span>
        <span className={styles.bcCur}>{product.title}</span>
      </nav>

      {/* Main grid */}
      <div className={styles.main}>
        {/* Gallery */}
        <div className={styles.gallery}>
          <div className={styles.mainImg}>
            <img
              src={currentImage}
              alt={product.title}
              className={styles.mainImgEl}
            />
          </div>
          <div className={styles.thumbs}>
            {product.colors.map((c, i) => (
              <button
                key={c._id ?? c.name}
                className={`${styles.thumb} ${
                  i === activeColorIndex ? styles.thumbActive : ""
                }`}
                onClick={() => setActiveColorIndex(i)}
                aria-label={c.name}
              >
                <img
                  src={c.productImage}
                  alt={c.name}
                  className={styles.thumbImg}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className={styles.info}>
          <ProductTitle
            product={product}
            avgRating={avgRating}
            reviewCount={reviews.length}
          />

          <hr className={styles.divider} />

          <ColorOption
            colors={product.colors}
            activeIndex={activeColorIndex}
            onSelect={setActiveColorIndex}
          />

          <MaterialOption materials={product.materials} />

          <hr className={styles.divider} />

          <Action
            product={product}
            onAddToCart={onAddToCart}
            onBuyNow={onBuyNow}
            onWishlist={onWishlist}
          />

          <TrustBadges />
        </div>
      </div>

      <Specs product={product} reviews={reviews} avgRating={avgRating} />

      <SuggestProduct products={relatedProducts} />
    </div>
  );
}
