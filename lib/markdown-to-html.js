'use strict';

const marked = require('marked');	// https://www.npmjs.com/package/marked

module.exports = function(markdown) {
	let renderer = new marked.Renderer();
	renderer.heading = renderHeading;		// overwrite default as it doens't force unique slugs
	return marked(markdown, { renderer });
};


let slugCount = {};
function renderHeading(text, level) {
	text = text.trim();
  	let slug = slugify(text);
  	if(slugCount.hasOwnProperty(slug)) {
  		slugCount[slug]++;
  		slug = slug + '-' + slugCount[slug];
  	} else {
  		slugCount[slug] = 0;
  	}

  	return `<h${level} id="${slug}">${text}</h${level}>`;
}

function slugify(text) {
	return text.toLowerCase().replace(/[^\w]+/g, '-');
}