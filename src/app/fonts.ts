import { Balsamiq_Sans, Comfortaa, Russo_One } from "next/font/google";

export const alegrea = Comfortaa({
  subsets: ["latin", "cyrillic"],
  variable: "--font-comfortaa",
  weight: ["400", "600", "700"],
});
export const balsamiqSans = Balsamiq_Sans({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-balsamiq-sans",
  style: ["italic", "normal"],
});
export const russoOne = Russo_One({
  subsets: ["latin", "cyrillic"],
  variable: "--font-russo-one",
  weight: "400",
});
