import Link from "next/link";
import React from "react";

const MenuItem = ({ mn }) => {
  return (
    <Link href={mn.url} className="inline pl-4">
      {mn.name}
    </Link>
  );
};

export default MenuItem;
