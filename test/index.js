const formatter = require('../index');
const fs = require('fs');

const readme = fs.readFileSync('./test/content/riotjs-style-guide.md', 'utf8');

const html = formatter.fromMarkdown(readme);

console.log(html);