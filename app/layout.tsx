import { Metadata } from "next";
import * as React from "react";
import * as PlayerBehavior from "@models/player-behavior";
import "@styles/globals.css";
import { siteConfig } from "lib/config";
import { cn } from "lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: `/favicon/site.webmanifest`,
  // openGraph: {
  //   url: siteConfig.url,
  //   title: siteConfig.title,
  //   description: siteConfig.description,
  //   siteName: siteConfig.title,
  //   images: [`${siteConfig.url}/images/og.jpg`],
  //   type: 'website',
  //   locale: 'en_US',
  // },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const getDashboardData = async () => {
    const dashboardData = await PlayerBehavior.getPlayerBehaviorDashboard({
      address: "0x220C795ee1af2B279d420eEAc7e16C79c6b90836",
      timeFrom: 1736709148,
      timeTo: 1736788348,
    });
    // console.log(dashboardData);
  };

  getDashboardData();
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("bg-background flex min-h-screen flex-col font-sans antialiased")}>{children}</body>
    </html>
  );
}
