module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'white': '#FFFFFF',
            's-10': '#1A1A1A',
            's-30': '#575757',
            's-60': '#808080',
            's-80': '#E0E0E0',
            's-90': '#F5F5F5',
            's-100': '#FCFCFC',
            'primary': '#FF9A0D',
            'primary-1': '#FF9A0D',
            'primary-2': '#FBE7C9',
            'accent': '#181FAD',
            'accent-1': '#EBECFF',
            'alert': '#A40000',
            'alert-1': '#FFEDED',
            'attention': '#615000',
            'attention-1': '#FFF7D1',
            'success': '#005916',
            'success-1': '#E3FCE9',
        },
        extend: {
            keyframes: {
                fadeIn: {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '1'},
                },
            },
            animation: {
                fadeIn: 'fadeIn 0.5s ease-in-out',
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}