const plugin = require("tailwindcss/plugin");

module.exports = plugin(function animations({matchUtilities, addUtilities, theme}) {
	matchUtilities({
		'animation-duration': (value) => {
			return {
				animationDuration: value,
			}
		}
	}, {
		values: theme('animationDuration'),
	});

	addUtilities({
		'.animation-linear': { 'animation-timing-function': 'linear' },
		'.animation-ease': { 'animation-timing-function': 'ease' },
		'.animation-ease-in': { 'animation-timing-function': 'ease-in' },
		'.animation-ease-out': { 'animation-timing-function': 'ease-out' },
		'.animation-ease-in-out': { 'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)' },
		'.animation-bounce': { 'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.35, 1.5)' },
	});

	matchUtilities({
		'animation-steps': (value) => {
			return {
				'animation-timing-function': `steps(${value})`,
			}
		}
	}, {
		values: theme('animationStep'),
	});
}, {
	theme: {
		animationStep: {
			4: '4',
			6: '6',
			8: '8',
			10: '10',
			12: '12',
			16: '16',
		},
		animationDuration: {
			500: '500ms',
			1000: '1000ms',
			1500: '1500ms',
			2000: '2000ms',
			3000: '3000ms',
			5000: '5000ms',
		}
	},
});