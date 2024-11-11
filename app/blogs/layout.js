import React from "react";

export default function layout({ children }) {
  return (
    <main className="max-w-prose mx-auto mt-10 py-10 px-6 prose dark:prose-invert dark:prose-headings:text-secondary lg:prose-h1:text-5xl">
      {children}
    </main>
  );
}
