import { LitElement, html } from 'lit-element'

// import module1 from './lib//module1.js'
// import module2 from './lib//module2.js'

const mod1File = "./lib/module1.js"
const mod2File = "./lib/module2.js"

class A extends LitElement {
    name () {
        return this
    }
}

function main () {
    console.log("Loaded now import mod 1")
    return import(mod1File).then(mod1 => {
    // return import("./lib/module1.js").then(mod1 => {
        console.log(mod1)
        mod1.default()
        // const b = new A()
        return import(mod2File)
        // return import("./lib/module2.js")
    }).then(mod2 => {
        mod2.default("BACON BABY")
    })
}
console.log('WATCHED IT BABY')
console.log("Waiting 3 seconds....")
setTimeout(() => main(), 3000)
