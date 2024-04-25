/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    important: true,
    theme: {
        container: {
            padding: "20px",
        },
        extend: {
            colors: {
                btn: "hsl(12, 88%, 59%)",
                btnHover: "#f25f3aad",
                darkBlue: "hsl(228, 39%, 23%)",
                darkGrayishBlue: "hsl(227, 12%, 61%)",
                veryDarkBlue: "hsl(233, 12%, 13%)",
                veryPaleRed: "hsl(13, 100%, 96%)",
                veryLightGray: "hsl(0, 0%, 98%)",
            },
        },
    },
    plugins: [],
};

