import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LenguageContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abril Rodríguez | Portfolio",
  description: "Abril Rodríguez | Portfolio",
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23FFFFFF" d="M12.89 3L14.85 3.4L11.11 21L9.15 20.6L12.89 3M6.5 6.5L8.5 8.5L5 12L8.5 15.5L6.5 17.5L1.5 12L6.5 6.5M17.5 6.5L22.5 12L17.5 17.5L15.5 15.5L19 12L15.5 8.5L17.5 6.5Z"/></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} antialiased bg-gray-50 dark:bg-gray-900`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}