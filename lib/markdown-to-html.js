'use strict';

const marked = require('marked');	// https://www.npmjs.com/package/marked
const renderCode = require('./render-code');
const renderHeading = require('./render-heading');

module.exports = function(markdown) {
	let renderer = new marked.Renderer();
	renderer.code = renderCode;
	renderer.heading = renderHeading;		// overwrite default as it doens't force unique slugs
	return marked(markdown, { renderer });
};


