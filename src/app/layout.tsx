import type { Metadata } from "next";

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
      <body>
        {children}
      </body>
    </html>
  );
}
