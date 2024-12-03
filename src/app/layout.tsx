import type { Metadata } from "next";
import { Nunito_Sans, Nunito } from "next/font/google";
import { createClient } from "@/prismicio";
import "@/app/globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
  preload: true,
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  preload: true,
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("settings");
  const { site_title: title, meta_description: description, og_image: ogImage } = page.data;

  return {
    title: title || "Flowrise Title fallback",
    description: description || "Flowrise Description fallback",
    openGraph: {
      images: [ogImage.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunitoSans.variable} ${nunito.variable} antialiased`}>
      <body>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
