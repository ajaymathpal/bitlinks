import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bitlinks - Your trusted URL shortener",
  description: "Bitlinks is a URL shortener that allows you to shorten your links and track them.",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">

      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-50`}> */}
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}



      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        <Navbar />
          <div className="relative">
            <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

            <div className="relative z-10 text-white">
              {children}
            </div>
          </div>
      </body>
    </html>
  );
}
