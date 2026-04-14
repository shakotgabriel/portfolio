import type { Metadata } from "next";
import { Federant, Great_Vibes } from "next/font/google";
import "./globals.css";

// Import fonts with CSS variables
const federant = Federant({
  variable: "--font-federant",
  subsets: ["latin"],
  weight: "400",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Chakuothbel Daniel | Software Developer Portfolio",
  description: "Welcome to the portfolio of Chakuothbel Daniel, a full-stack software developer specializing in React, Next.js, Node.js, and modern web development.",
  keywords: ["Chakuothbel Daniel", "Portfolio", "Software Developer", "React", "Next.js", "Node.js", "Full-stack Developer", "Web Developer"],
  authors: [{ name: "Chakuothbel Daniel" }],
  openGraph: {
    title: "Chakuothbel Daniel | Software Developer Portfolio",
    description: "Full-stack developer portfolio showcasing projects and skills in React, Next.js, Node.js, and more.",
    type: "website",
    url: "https://your-portfolio-url.com", // <-- replace with your live URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Chakuothbel Daniel | Software Developer Portfolio",
    description: "Portfolio of Chakuothbel Daniel – Full-stack developer projects and skills.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${federant.variable} ${greatVibes.variable}`}>
      <body className="bg-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
