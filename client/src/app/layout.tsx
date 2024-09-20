import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import TanstackProvider from "../../providers/TanstackProvider";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Solinity",
    default: "Solinity",
  },
  description: "Presale website for solana tokens",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
<<<<<<< HEAD
        className={`${inter.className} antialiased max-w-screen-2xl mx-auto bg-black bg-grid-small-[#010f07] text-white flex flex-col overflow-x-hidden`}
=======
        className={`${inter.className} antialiased max-w-screen-2xl mx-auto bg-black bg-grid-small-[#1e420e] text-white flex flex-col overflow-x-hidden `}
>>>>>>> dev
      >
        <TanstackProvider>
          <Navbar />

          {children}
          <Toaster />
          <Footer />
          <Analytics />
          <SpeedInsights />
        </TanstackProvider>
      </body>
    </html>
  );
}
