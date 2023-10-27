"use client";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import { CiDark } from "react-icons/ci";
const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <CiDark size={25} cursor={"pointer"} />
    </div>
  );
};

export default ThemeComp;
