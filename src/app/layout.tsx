
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import Header from "@/components/layout/Header/Header";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bizda | Electronics Store",
  description: "Discover the best electronics at Bizda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Header/>
      <Navbar/>
      <body className={`${lato.className} antialiased`}>
        {children}

        <Footer/>
      </body>
    </html>
  );
}
