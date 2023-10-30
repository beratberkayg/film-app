"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const tabs = [
    {
      name: "En Popüler",
      url: "popular",
    },
    {
      name: "Favoriler",
      url: "top_rated",
    },
    {
      name: "Yakında Gelecekler",
      url: "upcoming",
    },
  ];
  return (
    <div className="p-3 m-5 bg-gray-100 dark:bg-slate-900 flex items-center justify-center gap-5 rounded-lg max-sm:mt-[130px]">
      {tabs.map((tab, i) => (
        <Link
          className={`cursor-pointer hover:opacity-75 transition-all ${
            tab.url === genre
              ? "underline underline-offset-8 text-lg text-blue-500"
              : ""
          }`}
          key={i}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
