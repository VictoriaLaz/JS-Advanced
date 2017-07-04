/**
 * Created by Vicky on 7/3/2017.
 */
function sortArray(arr, order) {
    let ascending = function (a, b) {
        return a-b;
    };
    let descending = function (a, b) {
        return b-a;
    };

    let functions = {
        'asc':ascending,
        'desc': descending
    }
    return arr.sort(functions[order])
}