require('@babel/register')({
	ignore: [/(node_modules)/],
	presets: ["@babel/preset-typescript", '@babel/preset-env', '@babel/react'],
	plugins: [],
	extensions: [".es6", ".es", ".jsx", ".js", ".mjs", ".ts", ".tsx"],
});

require('./index.ts');
