import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashish Saha",
  description: "Data Science & AI Researcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}{" "}
        <div className="max-w-6xl mx-auto flex flex-col mb-2 px-4  text-center text-xs opacity-40 absolute bottom-0 left-0 right-0">
          © Copyright Ashish Saha 2024. All Rights are Reserved.
        </div>
      </body>
    </html>
  );
}
