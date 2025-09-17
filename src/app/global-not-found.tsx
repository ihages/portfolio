// Import global styles and fonts
"use client";
import "./globals.css";
import PageNotFound from "@/components/pageNotFound";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/index";
import Footer from "@/components/footer";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <title>Ihages | 404</title>
        <meta
        name="description"
        content="This page doesn't seem to exist! Try a different one out!"
      />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <div className="pt-[100px]">
          <PageNotFound />
        </div>
        <Footer />
      </body>
    </html>
  );
}
