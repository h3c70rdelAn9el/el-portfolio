/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        // Or if using `src` directory:
        // './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2C74B3',
                secondary: '#144272',
            },
            backgroundImage: {
                keyboard: "url('../public/assets/images/keyboard.jpeg')",
            },
        },
    },
    plugins: [],
}
