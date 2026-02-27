import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google"; // Import fonts
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "El Arca de Noé - Coffe & Roasters",
  description: "Calidad desde el origen. Menú digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${notoSerif.variable} antialiased bg-background-light text-text-main font-display`}
      >
        {children}
      </body>
    </html>
  );
}
