import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "@/hooks/use-translation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EcuaCasa - Home Services in Cuenca, Ecuador",
  description: "Find trusted home service providers in Cuenca, Ecuador. Connect with verified local professionals who speak English.",
  keywords: "Cuenca, Ecuador, home services, plumber, electrician, cleaning, handyman, expat services",
  openGraph: {
    title: "EcuaCasa - Home Services in Cuenca, Ecuador",
    description: "Find trusted home service providers in Cuenca, Ecuador. Connect with verified local professionals who speak English.",
    url: "https://ecuacasa.com",
    siteName: "EcuaCasa",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <TranslationProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}
