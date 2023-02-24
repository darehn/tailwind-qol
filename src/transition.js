const plugin = require("tailwindcss/plugin");

module.exports = plugin(function transition({addUtilities, matchUtilities}) {
	//
}, {
	theme: {
		extend: {
			transitionTimingFunction: {
				'bounce': 'cubic-bezier(0.175, 0.885, 0.35, 1.5)',
			},
			transitionProperty: {
				'width': 'width',
				'height': 'height',
				'size': 'width, height',
				'box': 'margin, padding, width, height',
				'text': 'color, text-decoration-color, font-size, font-weight, line-height, letter-spacing',
			}
		}
	}
});