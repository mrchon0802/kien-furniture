"use client";

import { useState } from "react";
import styles from "./styles/productDetail.module.css";

interface MaterialOptionProps {
  materials?: string[];
  onChange?: (material: string) => void;
}

export default function MaterialOption({
  materials,
  onChange,
}: MaterialOptionProps) {
  const [activeMaterial, setActiveMaterial] = useState(0);

  // Sản phẩm không có phần bọc/ngồi (bàn, tủ, kệ...) sẽ không có field
  // này hoặc mảng rỗng => không render gì cả.
  if (!materials || materials.length === 0) return null;

  const handleSelect = (i: number) => {
    setActiveMaterial(i);
    onChange?.(materials[i]);
  };

  return (
    <div>
      <p className={styles.optLabel}>Chất liệu</p>
      <div className={styles.sizeOpts}>
        {materials.map((m, i) => (
          <button
            key={m}
            className={`${styles.sizeBtn} ${
              i === activeMaterial ? styles.sizeBtnActive : ""
            }`}
            onClick={() => handleSelect(i)}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}
