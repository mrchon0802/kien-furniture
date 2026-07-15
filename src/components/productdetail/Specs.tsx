// components/productdetail/Specs.tsx
"use client";

import { useState } from "react";
import styles from "./styles/productDetail.module.css";
import type { Product } from "@/type/ProductType";
import { Stars } from "./ProductTitle";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Review {
  initials: string;
  name: string;
  date: string;
  rating: number;
  text: string;
}

export const MOCK_REVIEWS: Review[] = [
  {
    initials: "NT",
    name: "Nguyễn Thảo",
    date: "12/04/2026",
    rating: 5,
    text: "Sofa rất đẹp, vải mềm và thoáng. Giao hàng nhanh, đóng gói cẩn thận. Màu beige thực tế đẹp hơn ảnh.",
  },
  {
    initials: "MH",
    name: "Minh Hoàng",
    date: "05/04/2026",
    rating: 5,
    text: "Chất lượng xứng đáng với giá tiền. Ngồi rất êm, form ghế vững chắc. Đội lắp đặt chuyên nghiệp.",
  },
  {
    initials: "LA",
    name: "Lan Anh",
    date: "28/03/2026",
    rating: 4,
    text: "Thiết kế tối giản rất hợp phong cách nhà mình. Trừ 1 sao vì giao hàng hơi chậm hơn dự kiến.",
  },
];

const TABS = [
  "Mô tả sản phẩm",
  "Thông số kỹ thuật",
  "Đánh giá",
  "Chính sách",
] as const;
type Tab = (typeof TABS)[number];

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Format số thô (mét) thành chuỗi hiển thị, vd: 1.6 -> "1.6m" */
function formatDimension(value?: number, unit = "m"): string {
  if (value === undefined || value === null) return "-";
  return `${value}${unit}`;
}

// ─── Component ───────────────────────────────────────────────────────────────

interface SpecsProps {
  product: Product;
  reviews?: Review[];
  avgRating: number;
}

export default function Specs({
  product,
  reviews = MOCK_REVIEWS,
  avgRating,
}: SpecsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("Mô tả sản phẩm");

  const width = formatDimension(product.width);
  const length = formatDimension(product.length);
  const height = formatDimension(product.height);

  return (
    <>
      {/* Tabs */}
      <div className={styles.tabs} role="tablist">
        {TABS.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={activeTab === t}
            className={`${styles.tab} ${activeTab === t ? styles.tabActive : ""}`}
            onClick={() => setActiveTab(t)}
          >
            {t === "Đánh giá" ? `${t} (${reviews.length})` : t}
          </button>
        ))}
      </div>

      <div className={styles.tabContent} role="tabpanel">
        {activeTab === "Mô tả sản phẩm" && (
          <div className={styles.descGrid}>
            <div className={styles.descText}>
              <p>
                {product.title} được lấy cảm hứng từ thiết kế Scandinavian tối
                giản — nơi sự đơn giản gặp gỡ chức năng.
              </p>
            </div>
            <table className={styles.specTable}>
              <tbody>
                <tr>
                  <td>Chiều rộng</td>
                  <td>{width}</td>
                </tr>
                <tr>
                  <td>Chiều dài</td>
                  <td>{length}</td>
                </tr>
                <tr>
                  <td>Chiều cao</td>
                  <td>{height}</td>
                </tr>
                <tr>
                  <td>Trọng lượng</td>
                  <td>{product.weight} kg</td>
                </tr>
                <tr>
                  <td>Danh mục</td>
                  <td className={styles.capitalize}>{product.category}</td>
                </tr>
                <tr>
                  <td>Xuất xứ</td>
                  <td>Việt Nam</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "Thông số kỹ thuật" && (
          <table className={styles.specTable}>
            <tbody>
              <tr>
                <td>Trọng lượng</td>
                <td>{product.weight} kg</td>
              </tr>
              <tr>
                <td>Chiều rộng</td>
                <td>{width}</td>
              </tr>
              <tr>
                <td>Chiều dài</td>
                <td>{length}</td>
              </tr>
              <tr>
                <td>Chiều cao</td>
                <td>{height}</td>
              </tr>
              {product.materials && product.materials.length > 0 && (
                <tr>
                  <td>Chất liệu</td>
                  <td>{product.materials.join(", ")}</td>
                </tr>
              )}
              <tr>
                <td>Màu sắc</td>
                <td>{product.colors.map((c) => c.name).join(", ")}</td>
              </tr>
              <tr>
                <td>Danh mục</td>
                <td className={styles.capitalize}>{product.category}</td>
              </tr>
            </tbody>
          </table>
        )}

        {activeTab === "Đánh giá" && (
          <div className={styles.reviewsWrap}>
            <div className={styles.revHead}>
              <span className={styles.revTitle}>Đánh giá từ khách hàng</span>
              <div className={styles.revScore}>
                <span className={styles.scoreBig}>{avgRating.toFixed(1)}</span>
                <div>
                  <Stars rating={avgRating} size={16} />
                  <p className={styles.revCount}>{reviews.length} đánh giá</p>
                </div>
              </div>
            </div>
            <div className={styles.revCards}>
              {reviews.map((r) => (
                <div key={r.name} className={styles.revCard}>
                  <div className={styles.revUser}>
                    <div className={styles.revAvatar}>{r.initials}</div>
                    <div>
                      <p className={styles.revName}>{r.name}</p>
                      <p className={styles.revDate}>
                        <Stars rating={r.rating} size={11} /> · {r.date}
                      </p>
                    </div>
                  </div>
                  <p className={styles.revText}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Chính sách" && (
          <div className={styles.descText}>
            <p>
              <strong>Đổi trả:</strong> Miễn phí đổi trả trong vòng 30 ngày kể
              từ ngày nhận hàng nếu sản phẩm bị lỗi từ nhà sản xuất.
            </p>
            <p>
              <strong>Bảo hành:</strong> Bảo hành 5 năm cho khung và cấu trúc
              sản phẩm. Bảo hành 1 năm cho vải bọc.
            </p>
            <p>
              <strong>Giao hàng:</strong> Miễn phí giao hàng và lắp đặt tại nhà
              trong nội thành. Các khu vực khác vui lòng liên hệ.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
