// stylelint.config.cjs
module.exports = {
  extends: [
    "stylelint-config-standard", // sensible default rules
    "stylelint-config-tailwindcss", // Tailwind-specific linting
  ],
  rules: {
    // Let Tailwind's special at-rules through
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
  },
};
