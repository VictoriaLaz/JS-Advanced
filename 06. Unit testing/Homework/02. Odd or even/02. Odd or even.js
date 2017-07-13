/**
 * Created by Vicky on 7/12/2017.
 */
function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

module.exports = {isOddOrEven};