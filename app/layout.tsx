import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Aditya Patil",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <div className="relative min-h-screen overflow-x-hidden transition-colors bg-white dark:bg-gray-950 text-[#4a4a4a] dark:text-zinc-300">

            {/* Glowing orb */}
            <div
              aria-hidden="true"
              className="pointer-events-none fixed inset-0 flex items-center justify-center"
            >
              <div className="h-30 w-125 rounded-full blur-[200px] dark:blur-[100px] dark:bg-[#6cdcc5] animate-orb-pulse" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-150 flex-col py-35">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
