/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			xs: '480px',
			...defaultTheme.screens,
		},
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			roboto: ['Roboto', 'sans-serif'],
			sans: defaultTheme.fontFamily.sans,
			serif: defaultTheme.fontFamily.serif,
		},
	},
	plugins: [],
	safelist: [
		'from-red-500',
		'from-orange-500',
		'from-amber-500',
		'from-yellow-500',
		'from-lime-500',
		'from-green-500',
		'from-emerald-500',
		'from-teal-500',
		'from-cyan-500',
		'from-sky-500',
		'from-blue-500',
		'from-indigo-500',
		'from-violet-500',
		'from-purple-500',
		'from-fuchsia-500',
		'from-pink-500',
		'from-rose-500',
		'from-stone-500',
		'from-zinc-500',
		'from-slate-500',
		'bg-gradient-to-br from-red-800 to bg-red-400',
		'bg-gradient-to-br from-orange-800 to bg-orange-400',
		'bg-gradient-to-br from-amber-800 to bg-amber-400',
		'bg-gradient-to-br from-yellow-800 to bg-yellow-400',
		'bg-gradient-to-br from-lime-800 to bg-lime-400',
		'bg-gradient-to-br from-green-800 to bg-green-400',
		'bg-gradient-to-br from-emerald-800 to bg-emerald-400',
		'bg-gradient-to-br from-teal-800 to bg-teal-400',
		'bg-gradient-to-br from-cyan-800 to bg-cyan-400',
		'bg-gradient-to-br from-sky-800 to bg-sky-400',
		'bg-gradient-to-br from-blue-800 to bg-blue-400',
		'bg-gradient-to-br from-indigo-800 to bg-indigo-400',
		'bg-gradient-to-br from-violet-800 to bg-violet-400',
		'bg-gradient-to-br from-purple-800 to bg-purple-400',
		'bg-gradient-to-br from-fuchsia-800 to bg-fuchsia-400',
		'bg-gradient-to-br from-pink-800 to bg-pink-400',
		'bg-gradient-to-br from-rose-800 to bg-rose-400',
		'bg-gradient-to-br from-stone-800 to bg-stone-400',
		'bg-gradient-to-br from-zinc-800 to bg-zinc-400',
		'bg-gradient-to-br from-slate-800 to bg-slate-400',
	],
}
