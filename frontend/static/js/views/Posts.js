import PrimaryView from "./PrimaryView.js";

export default class extends PrimaryView {
    constructor(parameters) {
        super(parameters);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Posts</h1>
            <p>Post 1</p>
            <p>Post 2</p>
        `;
    }
}