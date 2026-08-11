import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Care & Joy Foundation Africa",
    template: "%s | Care & Joy Foundation Africa",
  },
  description: "Care & Joy Africa partners with vulnerable communities in Uganda through clean water, education, women’s livelihoods and inclusive care.",
};

const deploymentBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <base href={`${deploymentBasePath}/`} />
        <link rel="icon" href={`${deploymentBasePath}/favicon.svg`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
