import { Inter } from "next/font/google";
import Navbar from "../navbar/Navbar";
import { cn } from "@/lib/utils";
import Head from "next/head";
import Footer from "../footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Next Blog App</title>
        <meta name="description" content="Next Blog App Assignment" />
      </Head>
      <div
        className={cn("relative flex flex-col min-h-[100svh]", inter.className)}
      >
        <Navbar />
        <div className="flex-1 mt-32 sm:mt-28 mb-10">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
