"use client";

import styles from "./styles/productDetail.module.css";
import type { ProductColor } from "@/type/ProductType";

interface ColorOptionProps {
  colors: ProductColor[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function ColorOption({
  colors,
  activeIndex,
  onSelect,
}: ColorOptionProps) {
  if (colors.length === 0) return null;

  return (
    <div>
      <p className={styles.optLabel}>
        Màu sắc —{" "}
        <span className={styles.optValue}>{colors[activeIndex]?.name}</span>
      </p>
      <div className={styles.colorOpts}>
        {colors.map((c, i) => (
          <button
            key={c._id ?? c.name}
            className={`${styles.colorDot} ${
              i === activeIndex ? styles.colorDotActive : ""
            }`}
            style={{
              backgroundImage: `url(${c.image})`,
              backgroundSize: "cover",
            }}
            onClick={() => onSelect(i)}
            aria-label={c.name}
            aria-pressed={i === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
