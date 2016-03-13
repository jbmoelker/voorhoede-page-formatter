const formatter = require('../index');
const fs = require('fs');

const readme = fs.readFileSync(__dirname + '/content/riotjs-style-guide.md', 'utf8');

const html = formatter.fromMarkdown(readme, { toc: false });

fs.writeFileSync(__dirname + '/index.html', html);