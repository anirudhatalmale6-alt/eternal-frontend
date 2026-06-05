import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Eternal | The Enterprise Network",
  description: "High-performance digital infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head></head>

      <body className="antialiased selection:bg-[#c0392b] selection:text-white flex flex-col min-h-screen">

        {/* Unregister any stale Next.js service worker */}
        <Script id="sw-cleanup" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then(function(regs) {
                regs.forEach(function(reg) {
                  if (reg.active && reg.active.scriptURL.includes('/sw.js')) {
                    reg.unregister();
                    caches.keys().then(function(keys) {
                      keys.forEach(function(key) { if(key.includes('omega')) caches.delete(key); });
                    });
                  }
                });
              });
            }
          `}
        </Script>

        <Header />

        <div className="flex-grow pt-[70px] w-full">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
