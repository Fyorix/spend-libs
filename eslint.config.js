module.exports = [
    {
        ignores: [".pnp.*", ".yarn/**", "**/dist/**", "**/lib/**"],
    },
    {
        files: ["packages/**/*.ts", "packages/**/*.cjs", "packages/**/*.mjs"],
        rules: {
            "prefer-const": "warn",
            "no-constant-binary-expression": "error",
        },
    },
];