import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "АРКА 123 — Встречаемся напротив Библиотеки",
  description:
    "Пространство 123 м² для мастер-классов и семинаров напротив Национальной библиотеки. ул. Мстиславца, 10.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Unbounded:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
