import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Care & Joy Africa",
  description: "Care & Joy Africa partners with vulnerable communities in Uganda through clean water, education, women’s livelihoods and inclusive care.",
  other: {
    "codex-preview": "development",
  },
};

const deploymentBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head><base href={`${deploymentBasePath}/`} /></head>
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
