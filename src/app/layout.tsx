import "./globals.css";
import "@/styles/main.css";
import Script from "next/script";
import { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Av. Işın Nağme Evgin | İstanbul Hukuk Bürosu",
  description:
    "İstanbul'da profesyonel hukuki danışmanlık ve dava takibi hizmetleri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
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
        <Script id="main-js">
          {`
            // Handle page transitions
            document.addEventListener('DOMContentLoaded', function() {
              document.body.classList.remove('page-transitioning');
              
              // Sticky header
              window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                  document.querySelector('.navbar').classList.add('navbar-sticky');
                } else {
                  document.querySelector('.navbar').classList.remove('navbar-sticky');
                }
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
