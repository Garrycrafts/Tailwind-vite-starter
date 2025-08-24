// eslint.config.cjs
const tailwind = require("eslint-plugin-tailwindcss");
const html = require("@html-eslint/eslint-plugin");
const htmlParser = require("@html-eslint/parser");

module.exports = [
  // Flat preset (required for ESLint v9)
  tailwind.configs["flat/recommended"],

  // JS/TS/JSX/TSX
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { tailwindcss: tailwind },
    rules: {
      "tailwindcss/no-contradicting-classname": "error",
      "tailwindcss/no-custom-classname": "error",
    },
    settings: {
      tailwindcss: {
        config: "./tailwind.config.js",
        callees: ["clsx", "classnames", "cn"],
      },
    },
  },

  // HTML
  {
    files: ["**/*.html"],
    plugins: { tailwindcss: tailwind, "@html-eslint": html },
    languageOptions: { parser: htmlParser },
    rules: {
      "tailwindcss/no-contradicting-classname": "error",
      "tailwindcss/no-custom-classname": "error",
      "@html-eslint/no-duplicate-attrs": "error",
    },
    settings: {
      tailwindcss: { config: "./tailwind.config.js" },
    },
  },
];
