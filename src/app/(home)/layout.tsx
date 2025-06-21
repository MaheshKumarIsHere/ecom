"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-[#f4f4f4]">{children}</main>
      <Footer />
    </div>
  );
}

export default HomeLayout;
