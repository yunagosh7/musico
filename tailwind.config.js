/** @type {import('tailwindcss').Config} */

import { colors as defaultColors } from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				...defaultColors,
				white: {
					25: '#FFFFFF3F', // opacity 25%
					50: '#FFFFFF88', // opacity 50%
					75: '#FFFFFFBF', // opacity 75%
					100: '#FFFFFF',
				},
				black: {
					20: '00000033',
					50: '#00000088', // opacity 50%
					65: '000000A6',
					75: '#000000BF', // opacity 75%
					100: '#000000',
				},
			},
		},
	},
	plugins: [],
};
