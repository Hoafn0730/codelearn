function calculateDay(params) {
    if (!params) return 0;
    const specificDate = new Date(params);
    const today = new Date();
    const timeDifference = today - specificDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
}

export default function html([first, ...strings], ...value) {
    return value
        .reduce((acc, cur) => acc.concat(cur, strings.shift()), [first])
        .filter((x) => (x && x !== true) || x === 0)
        .join('');
}

export { calculateDay };
