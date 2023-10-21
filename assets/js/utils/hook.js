const useEffect = (cb, changed) => {
    setTimeout(() => {
        cb();
    }, 0);
};

const useState = function (state) {
    return [
        () => state,
        (value) => {
            state = value;
        },
    ];
};

export { useState, useEffect };
