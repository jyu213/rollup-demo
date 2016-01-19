var rollup = require('rollup');
var babel = require('rollup-plugin-babel');
var uglify = require('rollup-plugin-uglify');
var npm = require('rollup-plugin-npm');
var commonjs = require('rollup-plugin-commonjs');

rollup.rollup({
    entry: 'src/index.js',
    external: ['moment'],
    plugins: [
        npm({ jsnext: true, main: true }),
        commonjs(),
        // uglify(),
        babel({
            exclude: 'node_modules/**',
            presets: [ "es2015-rollup" ]
        })
    ]
}).then(function(bundle) {
    bundle.write({
        format: 'amd',
        globals: {
            moment: 'moment'
        },
        dest: 'dist/index_amd.js'
    });
    bundle.write({
        format: 'cjs',
        globals: {
            moment: 'moment'
        },
        dest: 'dist/index_cmd.js'
    });
    bundle.write({
        format: 'es6',
        globals: {
            moment: 'moment'
        },
        dest: 'dist/index_es6.js'
    });

    bundle.write({
        // output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
        format: 'umd',
        moduleName: 'DatePick',
        globals: {
            moment: 'moment'
        },
        sourceMap: true,
        dest: 'index.js'
    });
}).catch(function(err){
    console.log(err);
});