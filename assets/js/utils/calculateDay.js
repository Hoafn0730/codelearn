function calculateDay(params) {
    if (!params) return 0;
    const specificDate = new Date(params);
    const today = new Date();
    const timeDifference = today - specificDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
}

export { calculateDay };
