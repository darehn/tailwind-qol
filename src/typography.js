const plugin = require("tailwindcss/plugin");

module.exports = plugin(function typography({matchUtilities, addUtilities, theme}) {
	addUtilities({
		'.clamp-lines-none': {
			'-webkit-line-clamp': 'unset',
		},
	});

	matchUtilities({
		'clamp-lines': (value) => {
			return {
				display: '-webkit-box',
				'-webkit-box-orient': 'vertical',
				overflow: 'hidden',
				'-webkit-line-clamp': value,
			}
		}
	}, {
		values: theme('clampLines'),
	});

}, {
	theme: {
		clampLines: {
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
		},
	},
});