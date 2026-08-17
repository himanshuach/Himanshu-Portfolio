import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import type { PropsWithChildren } from "react";

import { siteConfig } from "@/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const viewport: Viewport = {
  themeColor: "#131314",
  colorScheme: "dark",
};

export const metadata: Metadata = siteConfig;

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} bg-portfolio-bg font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

/*
 * LEGACY LAYOUT — ThemeProvider removed in favor of fixed dark theme
 *
 * import { ThemeProvider } from "./provider";
 *
 * <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
 *   {children}
 * </ThemeProvider>
 */
