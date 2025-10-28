import { Inter } from "next/font/google";
import { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressBar from "@/components/Common/ProgressBar";
import PageTransition from "@/components/Common/PageTransition";
import { Providers } from "./providers";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xe Dịch Vụ - Nền tảng kết nối dịch vụ xe du lịch miền Trung",
  description: "Kết nối khách hàng với các nhà xe uy tín tại Đà Nẵng, Huế, Hội An, Quảng Nam. Dịch vụ bao xe du lịch, đưa đón sân bay, xe cưới hỏi/VIP chuyên nghiệp.",
  keywords: "xe du lịch, bao xe, đưa đón sân bay, xe cưới, Đà Nẵng, Huế, Hội An",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="vi">
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Suspense fallback={null}>
            <ProgressBar />
          </Suspense>
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
