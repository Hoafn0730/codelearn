const useEffect = (cb, changed) => {
    setTimeout(() => {
        cb();
    }, 0);
};

export default useEffect;
