const rollup = require('rollup')

const {
    inputs,
    outputs,
    outputOptions,
    inputOptions
} = require('./build.config.js')

const watchOptions = {
    ...inputOptions,
    output: outputs,
    watch: {
        // chokidar,
        // clearScreen,
        // exclude,
        // include
    }
}

const watcher = rollup.watch(watchOptions)

watcher.on('event', event => {
    const time = new Date();
    console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ': ' + event.code)
    // event.code can be one of:
    //   START        — the watcher is (re)starting
    //   BUNDLE_START — building an individual bundle
    //   BUNDLE_END   — finished building a bundle
    //   END          — finished building all bundles
    //   ERROR        — encountered an error while bundling
    //   FATAL        — encountered an unrecoverable error
})

// stop watching
// watcher.close()
