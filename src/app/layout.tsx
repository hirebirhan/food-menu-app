import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hira Restaurant - Best Dining Experience in Town",
  description:
    "Welcome to Hira Restaurant, where you can enjoy the best dining experience in town. We offer a wide range of delicious dishes prepared by our talented chefs. Visit us today and indulge in a culinary journey like no other.",
  keywords:
    "Hira Restaurant, dining experience, delicious dishes, talented chefs, culinary journey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-white dark:bg-gray-900">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
