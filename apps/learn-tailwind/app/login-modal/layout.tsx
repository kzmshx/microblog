import * as rootLayout from "@/app/layout";
import type { Metadata } from "next";
import "@/app/login-modal/styles.css";
import { mulish, rokkitt } from "@/app/login-modal/utils/font";

export const metadata: Metadata = {
  ...rootLayout.metadata,
};

export default function LoginModalLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} ${rokkitt.variable}`}>{children}</body>
    </html>
  );
}
