import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "CAPIVANCE | Advancing People. Enterprises. Finance.",
  description: "Learning, research, enterprise development, business advisory and financial & digital solutions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
