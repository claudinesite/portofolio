import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claudine | Développeuse Web",
  description: "Portfolio de développeuse web full stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}