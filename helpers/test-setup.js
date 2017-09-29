require('babel-register')();

// HELP MOCHA HANDLE CSS MODULES

var hook = require('css-modules-require-hook')
var sass = require('node-sass')

hook({
	extensions: ['.scss', '.css'],
	generateScopedName: '[local]___[hash:base64:5]',
	preprocessCss: (data, file) => sass.renderSync({ file }).css
});

// SETUP JSDOM BUSINESS

// var jsdom = require('jsdom').jsdom;
// const { JSDOM } = jsdom;

import jsdom from 'jsdom';
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
var exposedProperties = ['window', 'navigator', 'document'];

// const { document } = (new JSDOM('')).window;
// global.document = document;
// global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
	if (typeof global[property] === 'undefined') {
		exposedProperties.push(property);
		global[property] = document.defaultView[property];
	}
});

global.navigator = {
	userAgent: 'node.js'
};

