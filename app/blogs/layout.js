import React from "react";

export default function layout({ children }) {
  return (
    <main className="max-w-screen-lg mx-auto mt-10 py-10 px-6">{children}</main>
  );
}
