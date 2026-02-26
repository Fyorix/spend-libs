module.exports = [
    {
        ignores: [".pnp.*", ".yarn/**"],
    },
    {
        files: ["**/*.ts", "**/*.cjs", "**/*.mjs"],
        rules: {
            "prefer-const": "warn",
            "no-constant-binary-expression": "error",
        },
    },
];