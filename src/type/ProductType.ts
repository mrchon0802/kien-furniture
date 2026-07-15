/* ================= ROOM ================= */
export type ProductRoom =
  | "living-room"
  | "bed-room"
  | "kitchen"
  | "home-office";

/* ================= CATEGORY ================= */
export type ProductCategory =
  | "bed"
  | "table"
  | "chair"
  | "cabinet"
  | "sofa"
  | "other";

/* ================= COLOR ================= */
export interface ProductColor {
  _id?: string;
  name: string;
  image: string; // ảnh màu / vật liệu
  productImage: string; // ảnh sản phẩm theo màu
}

/* ================= PRODUCT ================= */
export interface ProductType {
  _id?: string;
  productId: string;

  title: string;
  image: string;
  price: number;
  discountPrice?: number | null;
  weight: number;

  // flat, đúng như schema backend — KHÔNG nested trong "size"
  width: number;
  length: number;
  height: number;

  category: ProductCategory;
  type: "hero" | "normal";
  room: ProductRoom[]; // 1 sản phẩm có thể hợp nhiều phòng

  colors: ProductColor[];

  // null hoặc undefined => không hiện UI chọn chất liệu
  materials?: string[] | null;

  createdAt?: string;
  updatedAt?: string;
}

// Alias để các component con dùng tên ngắn gọn hơn
export type Product = ProductType;
