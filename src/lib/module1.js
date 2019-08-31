import { LitElement, html, css } from 'lit-element'

export default function () {
    console.log("MODULE 1 YEAAAA")
}

class BigThing extends LitElement {
    constructor() {
        super()
        this.name = "Franklin"
    }

    static get styles () {
        return css`
            :host {
                color: red;
            }
        `
    }

    render () {
        return html`
            ${this.name}
        `
    }
}

window.customElements.define('big-thing', BigThing)