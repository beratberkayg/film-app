import React from "react";
import "./global.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Tabs from "@/components/Tabs";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <Providers>
          <Header />
          <Tabs />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
