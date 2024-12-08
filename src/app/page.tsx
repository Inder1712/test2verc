"use client";
import Header from "@/components/header";

import Footer from "@/components/footer";
import Airpods from "@/components/products/airpods";

export default function Home() {
  return (
    <div className="w-full h-auto">
      <Header />
      <Airpods />

      <Footer />
    </div>
  );
}
