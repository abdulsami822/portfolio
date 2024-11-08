import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-xl font-semibold">Blog pages are under development</p>
      <Link
        href="/"
        className="bg-accent text-secondary m-4 px-6 py-3 rounded-md"
      >
        Go back
      </Link>
    </div>
  );
}
