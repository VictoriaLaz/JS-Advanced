/**
 * Created by Vicky on 7/7/2017.
 */
function processor1(arr) {

    let processor = (function () {
        let result = [];
        function add(string) {
            result.push(string);
        }
        function remove(string) {
            result = result.filter(a=>a!==string);
        }
        function print() {

            console.log(result.toString());
        }
        return{
            add, remove, print
        }
    })();
    for (let command of arr) {
        let commandTokens = command.split(' ');
        processor[commandTokens[0]](commandTokens[1]);
    }
}

processor1(['add hello', 'add again', 'remove hello', 'add again', 'print']);