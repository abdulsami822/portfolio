import Link from "next/link";
import React from "react";
import { MdOutlineOpenInNew } from "react-icons/md";

export default function Featureblogs() {
  return (
    <div>
      <h2 className="font-semibold text-lg md:text-xl">
        Checkout my latest blog 📰
      </h2>
      <div className="mt-6">
        <Link
          className="flex items-center gap-2 text-secondary hover:underline"
          href="/blogs/compound-components-pattern"
        >
          <p>
            The When, Why, and How of Compound Components Pattern in React{" "}
            <MdOutlineOpenInNew className="text-sm inline-block mb-1" />
          </p>
        </Link>
        <p className="text-sm text-secondary/70">
          Discover how the Compound Components pattern in React can simplify
          complex UIs, enhance reusability, and improve code maintainability.
        </p>
      </div>
    </div>
  );
}
