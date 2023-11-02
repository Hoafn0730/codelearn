function formatDate(params) {
    var updatedAtDate = new Date(params);
    return `${updatedAtDate.getDate()}/${updatedAtDate.getMonth() + 1}/${updatedAtDate.getFullYear()}`;
}

function formatNumber(params) {
    return params.toLocaleString().replace(/,/g, '.');
}

function calculateDay(params) {
    if (!params) return 0;
    const specificDate = new Date(params);
    const today = new Date();
    const timeDifference = today - specificDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
}

function nameToSlug(name) {
    return name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[\s\W]+/g, '-')
        .toLowerCase();
}

export { formatDate, formatNumber, calculateDay, nameToSlug };
