import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import { EmailProvider } from "./context/EmailContext";
import { WalletProvider } from "./context/WalletContent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tazkora",
  description: "Simple way to make money online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <EmailProvider>
        <WalletProvider>
          <head>
            <ThemeModeScript />
          </head>
          <body
            className={`${inter.className} max-w-[100vw] overflow-x-hidden antialiased`}
          >
            {children}
          </body>
        </WalletProvider>
      </EmailProvider>
    </html>
  );
}
