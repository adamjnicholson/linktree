module.exports = {
	purge: ["./public/**/*.html", "./src/**/*.{ts,tsx}"],
	darkMode: false,
	theme: {
		extend: {},
	},
	variants: {
		// @todo add specific fonts
		extend: {
			invert: ["hover"],
		},
	},
	plugins: [],
};
