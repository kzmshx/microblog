import { Mulish, Rokkitt } from "next/font/google";

export const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: false,
  variable: "--font-mulish",
});

export const rokkitt = Rokkitt({
  weight: ["600", "700"],
  display: "swap",
  preload: false,
  variable: "--font-rokkitt",
});
