import Link from "next/link";
import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center container  bg-black p-2 cursor-none"
      aria-label="Go to homepage"
    >
      <Image
        src="/assets/images/icons/logo123.png"
        width="42"
        height="42"
        className="bg-yellow-400 p-1 rounded  grayscale-25"
        alt="2C Logo"
      />{" "}
     
      <h1 className="text-white ml-2 font-extrabold">2C</h1>
    </Link>
  );
}

export default Logo;
