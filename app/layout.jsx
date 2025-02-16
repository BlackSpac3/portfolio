import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import AppThemeProvider from "@/context/AppThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActiveSectionProvider from "@/context/ActiveSectionProvider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

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

export const metadata = {
  title: "Toyin Jacobs - Portfolio",
  description:
    "With over three years of experience specialized in writing efficient programs and developing stunning, functional, and dynamic websites, I’ve gained a vast number of skills and expertise with various software and web development technologies.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={`relative flex min-h-screen flex-col font-sans ${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <Toaster />

        <div className="-z-20">
          <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#373556] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
          <div className="absolute right-[11rem] top-[-6rem] -z-10 size-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#512d31] sm:w-[68.75rem]"></div>
        </div>
        <AppThemeProvider>
          <ActiveSectionProvider>
            <Header />
            <main className="flex grow flex-col">{children}</main>
            <Footer />
          </ActiveSectionProvider>
        </AppThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
