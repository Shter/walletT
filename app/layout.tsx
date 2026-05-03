import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import localFont from "next/font/local";

const theFuture = localFont({
  src: "./fonts/the-future-regular.woff2",
  variable: "--font-the-future",
  weight: "400",
  style: "normal",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cosmos-wallet.io"),
  title: "Cosmos Wallet | Secure Multichain Crypto Wallet",
  description:
    "Cosmos Wallet is a secure, modern, cross-platform cryptocurrency wallet for fast transactions, self-custody, and intuitive multichain asset management.",
  keywords: [
    "Cosmos Wallet",
    "crypto wallet",
    "cryptocurrency wallet",
    "self-custody",
    "multichain wallet",
    "secure wallet",
    "blockchain wallet",
    "web3 wallet",
  ],
  openGraph: {
    title: "Cosmos Wallet | Secure Multichain Crypto Wallet",
    description:
      "Secure self-custody, modern portfolio tools, and fast multichain transactions in one polished wallet.",
    url: "https://cosmos-wallet.io",
    siteName: "Cosmo Wallet",
    type: "website",
    images: [
      {
        url: "/og-cosmos-wallet.svg",
        width: 1200,
        height: 630,
        alt: "Cosmos Wallet secure multichain wallet interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmos Wallet | Secure Multichain Crypto Wallet",
    description:
      "A secure, modern wallet for fast transactions and intuitive multichain self-custody.",
    images: ["/og-nebula-wallet.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E1E1E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={theFuture.variable}>{children}</body>
    </html>
  );
}
