import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Pasindu | Full-Stack Developer Portfolio",
  description: "Full-Stack Engineer specializing in modern, high-performance web applications with Next.js, React, and Supabase.",
  keywords: ["Next.js", "React", "Full-Stack Developer", "Portfolio", "Supabase", "Pasindu"],
  authors: [{ name: "Pasindu" }],
  openGraph: {
    title: "Pasindu | Full-Stack Developer Portfolio",
    description: "Explore my projects, dynamic features, and contact me for full-stack web development.",
    url: "https://my-next-portfolio-nnwk-8r5zahhwn-pasindu9.vercel.app/", // ⚠️ ඔයාගේ Live Vercel Link එක මෙතනට Paste කරන්න
    siteName: "Pasindu Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Pasindu Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pasindu | Full-Stack Developer Portfolio",
    description: "Explore my projects, dynamic features, and contact me for full-stack web development.",
    images: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}