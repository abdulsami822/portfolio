import React from "react";
import Logo from "@/public/abdulsami.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-8 md:px-16 py-4 flex items-center justify-between">
      <div>
        <Link href="/">
          <Logo className="text-6xl" />
        </Link>
      </div>
      <div className="flex gap-6 items-center ">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="mailTo:samiabdul822@gmail.com" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
}
