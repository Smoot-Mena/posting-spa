import PrimaryView from "./PrimaryView.js";

export default class extends PrimaryView {
    constructor(parameters) {
        super(parameters);
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1>Settings</h1>
            <p>Setting option 1</p>
            <p>Setting option 2</p>
        `;
    }
}