function filterArray(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    }
    
    return numbers?.map(n => n > 100 ? 100 : n);
}

module.exports = { filterArray } ;