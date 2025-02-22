import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import { EmailProvider } from "./context/EmailContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tazkora",
  description: "Simple way to make money online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <EmailProvider>
        <head>
          <ThemeModeScript />
        </head>
        <body
          className={`${inter.className} max-w-[100vw] overflow-x-hidden antialiased`}
        >
          {children}
        </body>
      </EmailProvider>
    </html>
  );
}
