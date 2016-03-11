module.exports = {
	fromHtml,
	fromMarkdown
};

const htmlToPageData = require('./lib/html-to-page-data');
const listHeadings = require('./lib/list-headings');
const markdownToHtml = require('./lib/markdown-to-html');

const fs = require('fs');
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
	const html = markdownToHtml(markdown);
	return fromHtml(html, templateName);
}
