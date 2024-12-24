import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const options = {
  title: "Amadi-Sheriff Delight | Software Engineer",
  description:
    "Amadi-Sheriff Delight is a Software Engineer well seasoned who is passionate about building solutions to problems",
  url: "https://www.delightsheriff.tech/",
  siteName: "Delight Sheriff Portfolio",
  locale: "en-US",
  type: "website",
  keywords: [
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Amadi-Sheriff Delight",
  ],
  authors: [{ name: "Amadi-Sheriff Delight" }],
};

export const metadata: Metadata = {
  title: {
    default: options.title,
    template: "%s | Amadi-Sheriff Delight",
  },
  description: options.description,
  keywords: options.keywords,
  authors: options.authors,
  creator: "Amadi-Sheriff Delight",
  publisher: "Amadi-Sheriff Delight",
  metadataBase: new URL(options.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: options.title,
    description: options.description,
    url: options.url,
    siteName: options.siteName,
    locale: options.locale,
    type: "website",
    images: [
      {
        url: "https://www.delightsheriff.tech/favicon.ico", // Add your OG image path
        width: 1200,
        height: 630,
        alt: "Amadi-Sheriff Delight - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: options.title,
    description: options.description,
    creator: "@quietandstuff",
    images: ["https://www.delightsheriff.tech/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${jetbrains.className} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
