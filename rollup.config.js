var babel = require('rollup-plugin-babel');
var uglify = require('rollup-plugin-uglify');
var npm = require('rollup-plugin-npm');
var commonjs = require('rollup-plugin-commonjs');

export default{
    entry: 'src/index.js',
    external: ['moment'],
    format: 'umd',
    moduleName: 'DatePick',
    sourceMap: true,
    dest: 'index.js',
    plugins: [
        npm({ jsnext: true, main: true }),
        commonjs(),
        uglify(),
        babel({
            exclude: 'node_modules/**',
            presets: [ "es2015-rollup" ]
        })
    ]
};