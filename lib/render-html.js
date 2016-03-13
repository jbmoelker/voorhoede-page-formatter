module.exports = renderHtml;

const fs = require('fs');
const nunjucks = require('nunjucks');
const renderer = new nunjucks.Environment(new nunjucks.FileSystemLoader(['./src/']));

function renderHtml(templateName, data) {
	templateName = templateName || 'article';
	return renderer.render(`templates/${templateName}.html`, data);
}