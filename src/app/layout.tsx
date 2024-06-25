import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";


import { PageTransition } from "@/components/page";
//Header components
import { Header } from "@/components/Header";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata: Metadata = {
  title: "Romeu Cajamba",
  description: "Meu portfolio web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header/>
        <PageTransition>
          {children}
        </PageTransition>
        </body>
    </html>
  );
}
