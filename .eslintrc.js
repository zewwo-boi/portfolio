/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
    {
        extends: ["next/core-web-vitals", "plugin:@react-three/recommended"],
        rules: {
            "react/no-unknown-property": ["error", { ignore: ["css", "jsx"] }],
            "react-hooks/exhaustive-deps": [0],
        },
    },
];
