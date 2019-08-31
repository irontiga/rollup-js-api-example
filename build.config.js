const resolve = require('rollup-plugin-node-resolve')
const builtins = require('rollup-plugin-node-builtins')
const globals = require('rollup-plugin-node-globals')
const commonjs = require('rollup-plugin-commonjs')

const tree = require('./src/tree.js')

const inputOptions = {
    // core input options
    // external,
    input: {
        // main: 'src/main.js',
        // "lib/module1": 'src/lib/module1.js',
        // "lib/module2": 'src/lib/module2.js'
    }, // required
    plugins: [
        resolve({
            module: true
        }),
        commonjs({}),
        globals(),
        builtins(),
    ],
    // // advanced input options
    // cache,
    // inlineDynamicImports,
    manualChunks: {
        // 'lit-element': ['lit-element']
    }
    // onwarn,
    // preserveModules,
    // strictDeprecations,
}

const outputs = [
    {
        dir: 'build/es6',
        format: 'esm'
    },
    {
        dir: 'build/system',
        format: 'system', // required
    }
]

// Original
const outputOptions = {
    // core output options
    dir: 'build/system',
    // file,
    format: 'system', // required
    // globals,
    // name,

    // // advanced output options
    // assetFileNames,
    // banner,
    // chunkFileNames,
    // compact,
    // entryFileNames,
    // extend,
    // externalLiveBindings,
    // footer,
    // interop,
    // intro,
    // outro,
    // paths,
    // sourcemap,
    // sourcemapExcludeSources,
    // sourcemapFile,
    // sourcemapPathTransform,
}


function generateInputs(tree, inputs = {}) {
    // console.log(tree)
    for (const file of Object.values(tree)) {
        // const fileName = 
        inputs[file.file.split('.')[0]] = 'src/' + file.file
        if (file.children) generateInputs(file.children, inputs)
    }
    return inputs
}

inputOptions.input = generateInputs(tree, inputOptions.input)

module.exports = {
    outputs,
    outputOptions,
    inputOptions
}
