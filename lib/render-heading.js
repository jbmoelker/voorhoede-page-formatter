'use strict';

module.exports = renderHeading;

const slugify = require('slug');
let slugCount = {};

/**
 * Render heading as htmL with a unique slug (based on its text) as its ID.
 * @param  {String} text  of the heading
 * @param  {Number} level of the heading
 * @return {String}       HTML heading with unique slug as ID
 */
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