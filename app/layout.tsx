import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Multi-step form",
  description:
    "This is the solution to Multi-step form, a Frontend Mentor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(ubuntu.className, "bg-magnolia text-blue-marine")}>
        {children}
      </body>
    </html>
  );
}
