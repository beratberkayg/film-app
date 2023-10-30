import React from "react";
import "./global.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Tabs from "@/components/Tabs";
import Link from "next/link";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="">
        <Providers>
          <Header />
          <Tabs />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
