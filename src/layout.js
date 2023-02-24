const plugin = require("tailwindcss/plugin");

module.exports = plugin(function layout({matchUtilities}) {
	matchUtilities({
		overlay: (value = '') => {
			return {
				position: value,
				inset: 0,
			}
		},
	}, {
		values: {
			DEFAULT: 'absolute',
			fixed: 'fixed',
		}
	})
});