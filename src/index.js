module.exports = function reverse(n) {
    let nAbs = Math.abs(n);
    let number = nAbs
        .toString()
        .split("")
        .reverse()
        .join("");
    return number;
};
