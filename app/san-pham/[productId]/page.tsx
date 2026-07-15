// app/san-pham/[productId]/page.tsx

import { ProductDetail } from "@/components/productdetail/ProductDetail";
import type { ProductType } from "@/type/ProductType";

const apiUrl = process.env.SERVER_API_URL ?? "http://localhost:5000";

// ─── Fetch ─────────────────────────

async function getProduct(productId: string): Promise<ProductType | null> {
  if (!productId) return null;

  const res = await fetch(`${apiUrl}/products/${productId}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  try {
    return await res.json();
  } catch {
    return null;
  }
}

async function getRelated(
  rooms: string[],
  excludeId: string,
): Promise<ProductType[]> {
  if (!rooms || rooms.length === 0) return [];

  const results = await Promise.all(
    rooms.map(async (room) => {
      const res = await fetch(`${apiUrl}/products?room=${room}&limit=8`, {
        cache: "no-store",
      });
      if (!res.ok) return [];
      try {
        return (await res.json()) as ProductType[];
      } catch {
        return [];
      }
    }),
  );

  const merged = results.flat();

  // loại trùng theo productId + loại chính sản phẩm đang xem
  const seen = new Set<string>();
  const unique = merged.filter((p) => {
    if (p.productId === excludeId) return false;
    if (seen.has(p.productId)) return false;
    seen.add(p.productId);
    return true;
  });

  return unique.slice(0, 4);
}

// ─── Page ─────────────────────────

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  const product = await getProduct(productId);

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  const relatedProducts = await getRelated(product.room, product.productId);

  return <ProductDetail product={product} relatedProducts={relatedProducts} />;
}
