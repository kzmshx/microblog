import type { Metadata } from "next";
import "@/app/globals.css";
import { mulish, rokkitt } from "@/app/utils/font";

export const metadata: Metadata = {
  title: "Learn Tailwind",
  description: "Learn TailwindCSS with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} ${rokkitt.variable}`}>{children}</body>
    </html>
  );
}
