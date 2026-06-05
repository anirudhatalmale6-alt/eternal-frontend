// app/layout.tsx
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

  const speculationRules = {
    prerender: [
      {
        source: "document",
        where: { and: [{ href_matches: "/*" }] },
        eagerness: "conservative",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(speculationRules),
          }}
        />
      </head>

      <body className="antialiased selection:bg-[#c0392b] selection:text-white flex flex-col min-h-screen">

        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js', { scope: '/' })
                  .then(function(reg) { console.log('SW Omega Next.js Aktif!'); })
                  .catch(function(err) { console.error('SW Gagal:', err); });
              });
            }
          `}
        </Script>

        <Header />

        {/* Content area */}
        <div className="flex-grow pt-[70px] w-full">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}