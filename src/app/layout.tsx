import type { Metadata } from "next";
import { Roboto, League_Spartan } from "next/font/google";
import "@/styles/globals.scss";

const roboto = Roboto({
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Roi John Koch - Software Engineer",
  description: "Developed using Next.js App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
