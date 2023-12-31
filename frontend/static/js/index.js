import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import PostView from "./views/PostView.js";
import Settings from "./views/Settings.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
        result => result[1]);

    console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));

    return Object.fromEntries(keys.map((key, index) => {
        return [key, values[index]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    // console.log(pathToRegex("/posts/:id"));
    const routes = [
        {path: "/", view: Dashboard},
        {path: "/posts", view: Posts},
        {path: "/posts/:id", view: PostView},
        {path: "/settings", view: Settings}
    ];

    // Testing each route for matches or whatever
    const matches = routes.map(route => {
        return {
            route: route,
            // isMatch: location.pathname === route.path
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    // let match = matches.find(possibleMatch => possibleMatch.isMatch);
    let match = matches.find(possibleMatch => possibleMatch.result !== null);

    // 404 Error Catch
    if (!match) {
        match = {
            route: routes[0],
            // isMatch: true
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();

    // console.log(match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", doThis => {
        if (doThis.target.matches("[data-link]")) {
            doThis.preventDefault();
            navigateTo(doThis.target.href);
        }
    });
    
    router();
});