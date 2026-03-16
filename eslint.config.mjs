// @ts-check
// import eslint from '@eslint/js';
// @ts-ignore
import { defineConfig } from 'eslint/config';
// @ts-ignore
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    ignores: [
      "**/.yarn/**",
      "**/node_modules/**",
      "**/dist/**",
      "**/.pnp.cjs",
      "**/*.pb.ts",
      "**/*.js"
    ],
  },

  ...tseslint.configs.recommended,

  {
    files: ["**/*.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
    }
  },
]);
