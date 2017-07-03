/**
 * Created by Vicky on 7/3/2017.
 */
function commandProcessor(arr) {
    
    let processor = function () {
        let string = '';
        return function processor(commandString) {
            let stringTokens = commandString.split(' ');
            switch (stringTokens[0]){
                case 'append':
                    string += stringTokens[1];
                    break;
                case 'removeStart':
                    string = string.slice(Number(stringTokens[1]));
                    break;
                case 'removeEnd':
                    string = string.slice(0, string.length - Number(stringTokens[1]));
                    break;
                case 'print':
                    console.log(string);
                    break
            }
        }
    }();
    for (let el of arr) {
        processor(el);
    }
}