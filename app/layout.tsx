import type { Metadata } from "next";
import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const outfit = OutfitFont({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = OvoFont({
  subsets: ["latin"], weight: ["400"]
});

export const metadata: Metadata = {
  title: "Portfolio – Abril Rodríguez",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
