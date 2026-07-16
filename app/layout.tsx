// app/layout.tsx

import "./global.css";
import type { Metadata } from "next";
import NavBar from "@/components/navbar/NavBar";
import { Providers } from "@/store/Providers";
import AuthInitializer from "@/components/loginform/AuthInitializer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Kienfuniture.com",
  description: "Website nội thất",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Providers>
          <AuthInitializer />
          <NavBar />
          <main>{children}</main>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
