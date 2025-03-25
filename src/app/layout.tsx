import "./globals.css";
import "@/styles/main.css";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Av. Işıl Nağme Evgin | İstanbul Hukuk Bürosu",
  description:
    "İstanbul'da profesyonel hukuki danışmanlık ve dava takibi hizmetleri",
  keywords:
    "avukat, hukuk bürosu, istanbul, dava takibi, hukuki danışmanlık, Işıl Nağme Evgin",
  authors: [{ name: "Av. Işıl Nağme Evgin" }],
  openGraph: {
    title: "Av. Işıl Nağme Evgin | İstanbul Hukuk Bürosu",
    description:
      "İstanbul'da profesyonel hukuki danışmanlık ve dava takibi hizmetleri",
    type: "website",
    locale: "tr_TR",
    siteName: "Av. Işıl Nağme Evgin",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#8b0000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="canonical" href="https://your-domain.com" />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700|Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </head>
      <body>
        {children}

        <Script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
