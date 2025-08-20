import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import StyledComponentsRegistry from "@/config/register";

export const metadata: Metadata = {
  title: "ATOD Garage",
  description: "Especialistas en cajas automáticas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <head />
      <body className="layout" translate="no" suppressHydrationWarning={true}>
        <Suspense fallback={<div>Cargando...</div>}>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </Suspense>
      </body>
    </html>
  );
}
