/**
 * Created by Vicky on 7/4/2017.
 */
let result = (function result() {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };
    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        coke:{
            carbohydrate: 10,
            flavour:20,
        },
        burger:{
            carbohydrate: 5,
            fat: 7,
            flavour:3,
        },
        omelet:{
            protein:5,
            fat:1,
            flavour:1,
        },
        cheverme:{
            protein:10,
            carbohydrate:10,
            fat:10,
            flavour:10,
        }
    };
    return function (input) {
        let commandTokens = input.split(' ');
        let command = commandTokens[0];
        if(command === 'report'){
            return report();
        } else if(command === 'restock'){
            return restock(commandTokens[1], commandTokens[2]);
        } else {
           return prepare(commandTokens[1], commandTokens[2]);
        }
    };
    function report() {
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
    }
    function restock(ingredient, quantity) {
        stock[ingredient] += Number(quantity);
        return 'Success'
    }
    function prepare(recipe, quantity) {
        for (let ing in recipes[recipe]) {
            let ingNeeded = recipes[recipe][ing]*Number(quantity);
            if(ingNeeded>stock[ing]){
                return `Error: not enough ${ing} in stock`

            } else {
                stock[ing]-=ingNeeded;
            }
        }
        return 'Success'
    }
})();

console.log(result('restock flavour 50'));