module.exports = {
	fromHtml,
	fromMarkdown,
};

const htmlToPageData = require('./lib/html-to-page-data');
const listHeadings = require('./lib/list-headings');
const fs = require('fs');
const marked = require('marked');
const nunjucks = require('nunjucks');

function fromHtml(html, templateName) {
	templateName = 'article';
	const data = htmlToPageData(html);
	const toc = listHeadings(data.body);
	const template = fs.readFileSync(`./src/templates/${templateName}.html`, 'utf8');
	return nunjucks.renderString(template, {
		title: data.title,
		subtitle: data.subtitle,
		body: data.body,
		toc: toc
	});
}

function fromMarkdown(markdown, templateName) {
	const html = marked(markdown);
	return fromHtml(html, templateName);
}