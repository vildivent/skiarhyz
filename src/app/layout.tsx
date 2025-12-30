import "~/styles/globals.css";

import { type Metadata } from "next";
import { cn } from "~/shared/lib/cn";
import { alegrea, balsamiqSans, russoOne } from "./fonts";

export const metadata: Metadata = {
  title: "Дмитрий | Архыз",
  description: "Инструктор по горным лыжам",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={cn(alegrea.variable, balsamiqSans.variable, russoOne.variable)}
    >
      <body className="min-h-svh w-screen overflow-x-hidden">
        {children}
        <div id="modal" />
      </body>
    </html>
  );
}
