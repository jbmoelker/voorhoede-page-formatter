module.exports = renderHeading;

const slugify = require('./slugify');

/**
 * Render heading as htmL with a unique slug (based on its text) as its ID.
 * @param  {String} text  of the heading
 * @param  {Number} level of the heading
 * @return {String}       HTML heading with unique slug as ID
 */
function renderHeading(text, level) {
	text = text.trim();
  	const slug = slugify(text);

  	return `<h${level} id="${slug}" tabindex="-1"><a href="#${slug}">${text}</a></h${level}>`;
}