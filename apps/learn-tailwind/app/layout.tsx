import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Learn Tailwind",
  description: "Learn TailwindCSS with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
