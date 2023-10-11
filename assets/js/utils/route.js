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
        return routes[route];
    } catch (e) {
        throw new Error(`Route ${route} not found`);
    }
}

export { route, template, resolveRoute };
