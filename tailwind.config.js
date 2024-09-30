/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				blue1: "#5C9EAD", // Coral Blue 1
				blue2: "#62B6CB", // Coral Blue 2
				blue3: "#4A8FA1", // Coral Blue 3
				green1: "#50C878", // Emerald Green 1
				green2: "#3EB489", // Emerald Green 2
				green3: "#4BAF89", // Emerald Green 3
				vtgreen: "#20968b", // vtgreen is defined here
			},
		},
	},
	plugins: [],
};
