import type { Metadata } from "next";
import {Poppins} from "next/font/google"
import "./globals.css";

const poppins = Poppins ({
  subsets: ["latin"],
  weight: ["300","400", "600", "700", "200"]
})

export const metadata: Metadata = {
  title: "AI Lecture Scheduler",
  description: "AI-Powered Lecture Room Allocation & Scheduling System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
