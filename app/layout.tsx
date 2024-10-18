import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./provider";
import AppBar from "@/components/AppBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quiz App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <div className="">
            <div>
              <AppBar />
            </div>
            <div className="mt-20">
            {children}
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
