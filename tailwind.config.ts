import type { Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			boxShadow: {
				all: "inset 0 0 6px 0px rgba(0, 255, 0, 0.3)",
			},
		},
	},
	plugins: [],
	safelist: ["shadow-all", "focus:shadow-all"],
} satisfies Config;
