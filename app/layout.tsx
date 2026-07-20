import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAVA | Premium Educational Toys",
  description:
    "Nurturing curious minds with thoughtfully designed, sustainable educational toys for children aged 2-8.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body-md overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
