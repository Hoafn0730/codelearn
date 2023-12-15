const url = (()=>{
    var url = new URL(window.location.href);
    return {
        getSearchParams : (key)=> {
            return  url.searchParams.get(key);
        },
        setSearchParams : (key, value)=> {
            return url.searchParams.set(key, value);
        },
        hasSearchParams: (key)=> {
            return url.searchParams.has(key)
        },
        updateUrl : () => {
            window.history.replaceState(null, null, url.toString());
        },
        parseUrl: ()=> {
            return url.search.slice(1).split('&').reduce((obj, pair) => {
                const [key, value] = pair.split('=');
                obj[key] = value;
                return obj;
            }, {});
        }
    }


})()

export default url