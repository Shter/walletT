import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nebula-wallet.example"),
  title: "Nebula Wallet | Secure Multichain Crypto Wallet",
  description:
    "Nebula Wallet is a secure, modern, cross-platform cryptocurrency wallet for fast transactions, self-custody, and intuitive multichain asset management.",
  keywords: [
    "Nebula Wallet",
    "crypto wallet",
    "cryptocurrency wallet",
    "self-custody",
    "multichain wallet",
    "secure wallet",
    "blockchain wallet",
    "web3 wallet",
  ],
  openGraph: {
    title: "Nebula Wallet | Secure Multichain Crypto Wallet",
    description:
      "Secure self-custody, modern portfolio tools, and fast multichain transactions in one polished wallet.",
    url: "https://nebula-wallet.example",
    siteName: "Nebula Wallet",
    type: "website",
    images: [
      {
        url: "/og-nebula-wallet.svg",
        width: 1200,
        height: 630,
        alt: "Nebula Wallet secure multichain wallet interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nebula Wallet | Secure Multichain Crypto Wallet",
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
      <body>{children}</body>
    </html>
  );
}
