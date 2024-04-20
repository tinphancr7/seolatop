import {nextui} from "@nextui-org/react";
import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				"custom-fade-in": "fadeIn 0.8s ease-in-out",
			},
			keyframes: {
				fadeIn: {
					"0%": {opacity: "0", transform: "scale(0.6)"},
					"100%": {opacity: "1", transform: "scale(1)"},
				},
			},
			grayscale: {
				50: "50%",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"custom-gradient":
					"linear-gradient(1deg, rgba(38, 171, 227, 0) -0.3%, rgba(38, 171, 227, 0.5) 49.45%, rgba(45, 57, 143, 0) 99.54%, rgba(38, 171, 227, 0) 99.54%)",
			},
			colors: {
				blue09: "#090c1d",
				blue08: "#080c20",
				blue00: "#00031A",
				blueAB: "#ABDBFF",
				blue19: "#19205A",
				blue05: "#051033",

				green32: "#32dec0",

				purple55: "#5520D0",
				diamond: "#2D398F",
				gray7E: "#7E7E7E",
			},
			boxShadow: {
				card: "0px -2px 10.3px 1px rgba(50, 223, 192, 0.40)",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1600px",
		},
		container: {
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				// lg: "4rem",
				// xl: "5rem",
				// "2xl": "6rem",
			},
		},
	},
	plugins: [nextui()],
	// safelist: [
	// 	...new Array(1000).fill(0).map((item, index) => `lg:w-[${index}px]`),
	// 	...new Array(1000).fill(0).map((item, index) => `sm:w-[${index}px]`),
	// 	...new Array(1000).fill(0).map((item, index) => `md:w-[${index}px]`),
	// 	...new Array(1000).fill(0).map((item, index) => `xl:w-[${index}px]`),
	// 	...new Array(1000).fill(0).map((item, index) => `lg:h-[${index}px]`),
	// 	...new Array(1000).fill(0).map((item, index) => `sm:h-[${index}px]`),
	// 	...new Array(1000).fill(0).map((item, index) => `md:h-[${index}px]`),
	// 	...new Array(1000).fill(0).map((item, index) => `xl:h-[${index}px]`),
	// ],
};
export default config;
