import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* GOOGLE FONT ALTERNATIVES — all free, all production-ready:

   OPTION A (current): Sora + Plus Jakarta Sans
     - Sora: geometric warmth similar to Agrandir, confident character
     - Plus Jakarta Sans: clean modern feel, excellent readability

   OPTION B: Bricolage Grotesque + Manrope
     - More editorial personality, slightly more distinctive

   OPTION C: Archivo + Source Sans 3
     - Industrial and direct, strong for consulting positioning

   To switch fonts, update the Google Fonts link in the <head> below. */

export const metadata = {
  title: { default: "VITA-M | Behaviour-Driven Brand Strategy & Creative Production | India", template: "%s | VITA-M" },
  description: "We apply behavioural science to brand communication, creative production, business consulting and startup operations. Based in Hyderabad, serving globally.",
  metadataBase: new URL("https://vitam.agency"),
  openGraph: { title: "VITA-M | We Engineer Moments", description: "Behaviour-driven brand strategy and creative production. We engineer global scale efficiency.", siteName: "VITA-M", locale: "en_IN", type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Organization",
  name: "VITA-M", url: "https://vitam.agency",
  description: "Behaviour-driven brand strategy, creative production, business consulting and startup operations consultancy.",
  knowsAbout: ["Behaviour Design","Brand Strategy","Creative Production","Business Consulting","Startup Operations","AI Supply Chain","Web3 Branding"],
  founder: [{ "@type": "Person", name: "Aditya Pawar V", jobTitle: "CEO" }, { "@type": "Person", name: "Kirtan Tata", jobTitle: "CTO" }],
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&family=Plus+Jakarta+Sans:wght@200..800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-body">
        <Navbar />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
