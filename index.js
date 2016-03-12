module.exports = {
	fromHtml,
	fromMarkdown
};

const htmlToPageData = require('./lib/html-to-page-data');
const listHeadings = require('./lib/list-headings');
const markdownToHtml = require('./lib/markdown-to-html');
const renderHtml = require('./lib/render-html');

function fromHtml(html, options) {
	options = Object.assign({ language: 'en' }, options);
	const data = htmlToPageData(html);
	const toc = (options.toc) ? listHeadings(data.body, options.toc) : [];

	return renderHtml(options.templateName, {
		language: options.language,
		title: data.title,
		subtitle: data.subtitle,
		body: data.body,
		toc: toc
	});
}

function fromMarkdown(markdown, options) {
	const html = markdownToHtml(markdown);
	return fromHtml(html, options);
}
