import "@/styles/globals.css";

export const metadata = {
  title: "cinevibe.web | Professional Web Development Services",
  description:
    "Transform your vision into reality with cinevibe.sk. We create stunning websites, e-commerce stores, and custom web solutions. Professional web development services tailored to your business needs.",
  keywords: "web development, website design, e-commerce, business websites, landing pages, cinevibe",
  authors: [{ name: "cinevibe.web" }],
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: { url: "/favicon.png", type: "image/png" },
  },
  openGraph: {
    title: "cinevibe.web | Professional Web Development",
    description: "Creating stunning digital experiences for your business",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
