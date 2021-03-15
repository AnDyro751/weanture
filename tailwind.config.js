module.exports = {
    purge: {
        content: [
            './pages/**/*.{js,jsx,ts,tsx}',
            './src/**/*.{js,jsx,ts,tsx}',
            './public/**/*.{js,jsx,ts,tsx}'
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: (theme) => ({
                ...theme("colors"),
                "whatsapp": "#25d366",
                main: "#c8ff00"
            }),
            height: {
                xxl: "36em"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
