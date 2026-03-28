import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/layout/Footer";
import { RootProvider } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reado - Your daily magazine for curious minds",
  description: "Dive into well-crafted stories, interviews, and guides designed to inform, inspire, and keep you updated with the latest in news and creativity.",
  openGraph: {
    title: "Reado - Your daily magazine for curious minds",
    description: "Dive into well-crafted stories, interviews, and guides designed to inform, inspire, and keep you updated.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <RootProvider>
          <Navigation />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
