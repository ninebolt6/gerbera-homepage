module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "@nuxtjs/eslint-config-typescript",
    "plugin:vue/vue3-essential",
    "prettier",
    "plugin:nuxt/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn", { args: "all", argsIgnorePattern: "^_" }],
  },
}
