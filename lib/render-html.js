module.exports = renderHtml;

const fs = require('fs');
const nunjucks = require('nunjucks');

function renderHtml(templateName, data) {
	templateName = templateName || 'article';
	const template = fs.readFileSync(`./src/templates/${templateName}.html`, 'utf8');
	return nunjucks.renderString(template, data);
}