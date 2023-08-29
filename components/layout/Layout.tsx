import { Inter } from "next/font/google";
import Navbar from "../navbar/Navbar";
import { cn } from "@/lib/utils";
import Head from "next/head";

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
      <div className={cn("relative", inter.className)}>
        <Navbar />
        <div className="mt-32 sm:mt-28 my-20">{children}</div>
      </div>
    </>
  );
};

export default Layout;
