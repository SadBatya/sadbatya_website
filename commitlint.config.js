// commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  // Add custom rules here if needed
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
    "scope-enum": [
      2,
      "always",
      ["global", "componentA", "componentB"], // Customize your scopes
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 100],
  },
};
