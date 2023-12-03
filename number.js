Number.EPSILON = Math.pow(2, -52);
Number.MAX_SAFE_INTEGER = 9007199254740991; // Math.pow(2, 53) - 1;
Number.MIN_SAFE_INTEGER = -9007199254740991; // -(Math.pow(2, 53) - 1)

Number.parseInt = parseInt;
Number.parseFloat = parseFloat;

Number.isFinite = function (value) {
    return typeof value === 'number' && isFinite(value);
};

Number.isInteger = function (value) {
    return typeof value === 'number' &&
        isFinite(value) &&
        Math.floor(value) === value;
};

Number.isNaN = function isNaN(input) {
    return typeof input === 'number' && input !== input;
}

Number.isSafeInteger = function (value) {
    return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
};
