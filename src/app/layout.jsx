import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tazkora",
  description: "Simple way to make money online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${inter.className} max-w-[100vw] overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
