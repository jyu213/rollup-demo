var babel = require('rollup-plugin-babel');
var uglify = require('rollup-plugin-uglify');
var npm = require('rollup-plugin-npm');

export default{
    entry: 'src/index.js',
    format: 'umd',
    external: ['moment'],
    moduleName: 'DatePick',
    sourceMap: true,
    dest: 'index.js',
    plugins: [
        // npm({jsnext: true, main: true}),
        // uglify(),
        babel({
            exclude: 'node_modules/**',
            presets: [ "es2015-rollup" ]
        })
    ]
};