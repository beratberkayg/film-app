import React from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import Link from "next/link";

const Header = () => {
  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "login",
    },
  ];

  return (
    <div className="flex items-center justify-center flex-wrap gap-7 h-20 p-5">
      <Link href="/" className="bg-blue-600 rounded-lg p-3 text-2xl font-bold">
        BBG Films
      </Link>
      <div className="flex flex-1 items-center p-3 gap-2 border rounded-md">
        <input
          placeholder="Ne Arıyorsun?"
          className="outline-none flex-1 bg-transparent"
          type="text"
        />
        <BiSearch size={25} cursor={"pointer"} />
      </div>
      <ThemeComp />
      <div className="flex ">
        {menu.map((mn, i) => (
          <MenuItem key={i} mn={mn} />
        ))}
      </div>
    </div>
  );
};

export default Header;
