import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Декор Некрасова",
  description: "Организация мероприятий",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
