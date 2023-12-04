module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,png,jpg,svg,jfif,html,js,json,pdf}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};