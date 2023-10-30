import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-center mt-5 text-2xl ">
      Made by
      <Link
        className="pl-3 underline"
        target="_blank"
        href="https://github.com/beratberkayg"
      >
        Berat Berkay
      </Link>
    </footer>
  );
};

export default Footer;
