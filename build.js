const rollup = require('rollup')

const {
    inputs,
    outputs,
    outputOptions,
    inputOptions
} = require('./build.config.js')

async function writeBundle (bundle, outputOptions) {
    // generate code
    const { output } = await bundle.generate(outputOptions)

    // for (const chunkOrAsset of output) {
    //     if (chunkOrAsset.isAsset)  console.log('Asset', chunkOrAsset)
    //     else console.log('Chunk', chunkOrAsset.modules)
    // }
    // or write the bundle to disk
    await bundle.write(outputOptions)
}

async function build() {
    // create a bundle
    // inputOptions.input = generateInputs(tree, Object.assign({}, inputOptions.input))
    console.log(inputOptions.input)
    const bundle = await rollup.rollup(inputOptions)

    console.log(bundle.watchFiles) // an array of file names this bundle depends on

    for (const option of outputs) {
        await writeBundle(bundle, {
            ...outputOptions,
            ...option
        })
    }
}

build()
