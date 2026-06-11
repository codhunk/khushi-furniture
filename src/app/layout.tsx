import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khushi Furniture | Crafting Elegance for Your Home",
  description: "Crafting Elegance for Your Home with Khushi Furniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}
