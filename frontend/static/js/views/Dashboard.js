import PrimaryView from "./PrimaryView.js";

export default class extends PrimaryView {
    constructor(parameters) {
        super(parameters);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>This is the Dashboard.</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>
                <a href="/posts" data-link>View posts here</a>
            </p>
        `;
    }
}