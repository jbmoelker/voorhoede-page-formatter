const marked = require('marked');	// https://www.npmjs.com/package/marked

module.exports = function(markdown) {
	return marked(markdown);
};