let routes = {};
let templates = {};

function route(path, template) {
    if (typeof template === 'function') return (routes[path] = template);
    else if (typeof template === 'string') return (routes[path] = templates[template]);
    else return;
}
function template(name, templateFunction) {
    return (templates[name] = templateFunction);
}
function resolveRoute(route) {
    try {
        // debugger;
        return routes[route];
    } catch (e) {
        console.log(`Route ${route} not found`);
    }
}

export { route, template, resolveRoute };
