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

const React = (function () {
    let hooks = [];
    let index = 0;

    function useState(initialValue) {
        const _idx = index;
        const state = hooks[_idx] || initialValue;

        const setState = (newValue) => {
            hooks[_idx] = newValue;
        };

        index++;

        return [state, setState];
    }

    function render(component) {
        index = 0;

        const C = component();

        C.render();

        return C;
    }

    return { useState, render };
})();

export { useEffect };
