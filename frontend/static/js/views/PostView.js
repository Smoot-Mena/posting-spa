import PrimaryView from "./PrimaryView.js";

export default class extends PrimaryView {
    constructor(parameters) {
        super(parameters);
        this.setTitle("Looking at Post");
    }

    async getHtml() {
        console.log(this.parameters.id);
        return `
            <h1>Settings</h1>
            <p>Setting option 1</p>
            <p>Setting option 2</p>
        `;
    }
}