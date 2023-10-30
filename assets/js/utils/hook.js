const MyReact = (function () {
    let _val;
    return {
        useState(initialValue) {
            _val = _val || initialValue;
            function setState(newVal) {
                _val = newVal;
            }
            return [_val, setState];
        },
        useEffect(cb) {
            setTimeout(() => {
                cb();
            }, 0);
        },
    };
})();

const useState = function (state) {
    return [
        () => state,
        (value) => {
            state = value;
        },
    ];
};
function useEffect(cb, changed) {
    setTimeout(() => {
        cb();
    }, 0);
}

export { useEffect };
