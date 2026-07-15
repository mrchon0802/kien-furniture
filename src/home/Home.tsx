import HeroSection from "@/home/HeroSection/HeroSection";
import StatsBar from "@/home/StatsBar/StatsBar";
import CategoryGrid from "@/home/CategoryGrid/CategoryGrid";
import ProductSection from "@/home/ProductSection/ProductSection";
import PromoBanner from "@/home/PromoBanner/PromoBanner";

const apiUrl = process.env.SERVER_API_URL || "http://localhost:5000";

async function getData(endpoint: string, revalidateTime = 60) {
  try {
    const res = await fetch(`${apiUrl}${endpoint}`, {
      next: { revalidate: revalidateTime },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}
const products = await getData("/products");
const heroProducts = products.filter((p: any) => p.type === "hero");
export default async function Home() {
  return (
    <main>
      <HeroSection />
      <StatsBar />
      <CategoryGrid products={products} />

      <ProductSection title="Sản phẩm bán chạy" products={heroProducts} />

      <PromoBanner
        title="Miễn phí lắp đặt cho đơn từ 10 triệu"
        subtitle="Áp dụng toàn quốc"
        buttonText="Mua ngay"
      />
    </main>
  );
}
