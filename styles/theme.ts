// Constants
export const BREAKPOINTS = {
	phone: 375,
	tablet: 768,
	laptop: 1110,
	xl: 1440,
};

// Themes
export const theme = {
	FONT_SIZES: {
		header1: `${56 / 16}rem`,
		header2: `${24 / 16}rem`,
		header3: `${18 / 16}rem`,
		subheader1: `${15 / 16}rem`,
		subheader2: `${13 / 16}rem`,
		body: `${14 / 16}rem`,
	},
	WEIGHTS: {
		medium: 500,
		bold: 700,
	},
	QUERIES: {
		phoneAndUp: `(min-width: ${BREAKPOINTS.phone / 16}rem)`,
		tabletAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
		laptopAndUp: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
		xlLaptopAndUp: `(min-width: ${BREAKPOINTS.xl / 16}rem)`,

	},
	COLORS: {
		primary: {
			900: "#2BD0D0",
			700: "#9AE3E3"
		},
		secondary: {
			900: "#3A3054",
			700: "#4B3F6B"
		},
		warning: "#F46363",
		dark: {
			900: "#34313D",
			800: "#232127",
			700: '#9E9AA8',
			500: '#BFBFBF',
			200: '#EFF1F7'
		},
		white: '#FFFFFF'
	},
};
