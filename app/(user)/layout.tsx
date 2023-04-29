import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Banner from "../../components/blogs/Banner";
import Header from "../../components/blogs/Header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="max-w-7xl mx-auto">
        {" "}
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
