import type { Metadata } from "next";
import { Jost, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "QuillAudits | Case Study",
  description: "A Assignment gaven by QuillAudits.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/logos/logo-light.svg",
        href: "/assets/logos/logo-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/logos/logo.svg",
        href: "/assets/logos/logo.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "min-h-full w-full relative")}>
        <Navbar />
        <main>{children}</main>
        <footer className="bg-mains w-fullS">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
