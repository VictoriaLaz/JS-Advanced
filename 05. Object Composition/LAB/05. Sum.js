/**
 * Created by Vicky on 7/7/2017.
 */
function getModel() {
    let input1, input2, result;
    function init(selector1, selector2, resultSelector) {
        input1 = $(selector1);
        input2 = $(selector2);
        result = $(resultSelector);
    }
    function add() {
        result.val(Number(input1.val())+Number(input2.val()));
    }
    function subtract() {
        result.val(Number(input1.val())-Number(input2.val()));
    }
    return{
        init, add, subtract
    }
}