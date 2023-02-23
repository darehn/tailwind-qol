const plugin = require("tailwindcss/plugin");

module.exports = plugin(function size({matchUtilities, theme}) {
	matchUtilities({
		's': (value) => {
			return {
				width: value,
				height: value,
			}
		}
	}, {
		values: theme('width')
	});
});