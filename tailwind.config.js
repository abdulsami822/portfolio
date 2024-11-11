/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary))",
        secondary: "rgb(var(--color-secondary))",
        accent: "rgb(var(--color-accent))",
      },
      typography: {
        DEFAULT: {
          css: {
            "span.accent": {
              color: "rgb(var(--color-accent))",
            },
          },
        },
      },
    },
    hljs: {
      theme: "github-dark",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-highlightjs"),
  ],
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
};
