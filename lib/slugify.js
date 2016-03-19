'use strict';

module.exports = slugify;

const cheerio = require('cheerio');
let slugCount = {};

/**
 * Create unique slug based on input text, stripping any html tags and special characters.
 * @param {string} text
 * @returns {string}
 */
function slugify(text) {
    const tempHeading = 'h1';
    const $ = cheerio.load(`<${tempHeading}>${text}<{$tempHeading}/>`);

    let slug = $(tempHeading).text().toLowerCase()
        .replace(/[^\w]+/g, '-') // replace special characters
        .replace(/-+$/, ''); // remove any trailing hyphen

    // ensure slug is unique, if not append instance number
    if(slugCount.hasOwnProperty(slug)) {
        slugCount[slug]++;
        slug = slug + '-' + slugCount[slug];
    } else {
        slugCount[slug] = 0;
    }

    return slug;
}