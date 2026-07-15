// src/type/Product.ts

/* ===================== WARRANTY ===================== */

export type WarrantyStatus =
  | "pending"
  | "processing"
  | "approved"
  | "rejected"
  | "completed";

export interface WarrantyRequest {
  id: string;
  content: string;
  status: WarrantyStatus;
  createdAt: string; // ISO date string
}

/* ===================== PRODUCT ===================== */

export interface PurchasedProduct {
  id: string;
  name: string;
  image?: string;
  price: number;
  quantity: number;
  purchaseDate: string; // ISO date string
  warrantyPeriod?: number; // số tháng bảo hành, ví dụ: 12
  warrantyRequest: WarrantyRequest | null;
  userId: string; // 👈 thêm
  productId: string; // 👈 thêm
  material?: string; // 👈 thêm
  size?: string; // 👈 thêm
  color?: string; // 👈 thêm
  fabricColor?: string; // 👈 thêm
  fabricMaterial?: string; // 👈 thêm
}

/* ===================== STATE ===================== */

export interface PurchasedProductState {
  products: PurchasedProduct[];
}
