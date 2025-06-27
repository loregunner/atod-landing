// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // importa estilos globales

export const metadata: Metadata = {
  title: "ATOD Garage",
  description: "Especialistas en cajas automáticas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}