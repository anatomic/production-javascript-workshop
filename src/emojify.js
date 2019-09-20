const { emojify } = require("node-emoji");

module.exports = async (markdown, options) => emojify(markdown, name => name);
