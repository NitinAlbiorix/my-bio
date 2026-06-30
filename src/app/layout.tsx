import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import { Providers } from "@/components/providers/providers";
import { PortfolioPage } from "@/components/portfolio-page";
import { personal } from "@/data/personal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${personal.name} | ${personal.title}`,
  description: personal.tagline,
  keywords: [
    personal.name,
    "Software Engineer",
    "React",
    "Next.js",
    "NestJS",
    "TypeScript",
    "Ahmedabad",
    "Albiorix Technology",
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    title: `${personal.name} | ${personal.title}`,
    description: personal.tagline,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} | ${personal.title}`,
    description: personal.tagline,
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
