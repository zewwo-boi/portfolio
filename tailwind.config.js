/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

// TODO: Refine the color palette

module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                // Body
                "body-primary": "#13192e",
                "body-secondary": "#161d36",
                "body-tertiary": "#19213c",
                // Button
                "btn-primary": "rgb(150,150,150,0.2)",
                "btn-primary_hover": "rgb(150,150,150,0.3)",
            },
            colors: {
                // Regular Text
                "primary": colors.gray["300"],
                "secondary": colors.gray["400"],
                // Button
                "btn-primary": "#adbac7",
                "btn-primary_hover": "#b4c2d0",
                "btn-secondary": colors.transparent,
                "btn-secondary_hover": "rgb(88,94,138,0.1)",
            },
            borderColor: {
                // Regular Border Color
                "primary": "rgb(255,255,255,0.2)",
                "primary_hover": "rgb(255,255,255,0.25)",
                "body-primary": "#13192e",
            },
        },
        fontFamily: {
            sans: [
                "Inter",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Oxygen",
                "Ubuntu",
                "Cantarell",
                "Fira Sans",
                "Droid Sans",
                "Helvetica Neue",
                "sans-serif",
            ],
        },
    },
    plugins: [],
};
