import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Curbside Cans Valet | Student-Run Trash Can Service",
    template: "%s | Curbside Cans Valet"
  },
  description: "Student-run trash can valet service in La Jolla & San Diego. We take your bins out before pickup and return them after. Never miss trash day again!",
  keywords: ["trash service", "La Jolla", "San Diego", "student business", "curbside valet"],
  authors: [{ name: "Curbside Cans Valet" }],
  creator: "Curbside Cans Valet",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Curbside Cans Valet",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@curbsidecansvalet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
