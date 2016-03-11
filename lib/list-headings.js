'use strict';

const cheerio = require('cheerio');

module.exports = function(html) {
	const $ = cheerio.load(html);
	const headings = $(':header').get();

	return headings.map(heading => {
		const $heading = $(heading);
		return {
			html: $heading.html(),
			id: $heading.attr('id'),
			level: parseInt(heading.tagName.substring(1))
		}
	});
};