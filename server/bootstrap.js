require('ignore-styles');
require('regenerator-runtime');

require('@babel/register')({
	ignore: [/(node_modules)/],
	presets: ['@babel/preset-env', '@babel/react', "@babel/preset-typescript"],
	plugins: [],
	extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx'],
});

require('./index.ts');
