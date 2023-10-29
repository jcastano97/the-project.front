import type { Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config;
