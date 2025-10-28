"use client";

import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressBar from "@/components/Common/ProgressBar";
import PageTransition from "@/components/Common/PageTransition";
import { Providers } from "./providers";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <ProgressBar />
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
