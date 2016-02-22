
var md = require('markdown-styles');

module.exports = function markdownStyles(inputdir, outputdir, options, callback) {

	if (!options) {
		options = {};
	}

	if (!options.layout) {
		throw new Error('The markdown-styles transform needs a "layout" option.');
	}

	md.render(md.resolveArgs({
		input: inputdir,
		output: outputdir,
		layout: options.layout
	}), callback);
};

module.exports.defaults = {
	accept: ".md",
	ext: ".html"
};
