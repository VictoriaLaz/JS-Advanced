/**
 * Created by Vicky on 7/8/2017.
 */
(function solve() {
    String.prototype.ensureStart = function (str) {
        if(!this.startsWith(str)){
            return str + this;
        } else {
            return '' + this;
        }
    };
    String.prototype.ensureEnd = function (str) {
        if(!this.endsWith(str)){
            return this + str;
        } else {
            return '' + this;
        }
    };
    String.prototype.isEmpty = function () {
        return '' + this === '';
    }
    String.format = function(){
        let str = arguments[0];
        for (let i = 1; i < arguments.length; i++){
            let regexPattern = '\\{' + (i - 1) + '\\}';
            let regex = new RegExp(regexPattern, 'g');
            str = str.replace(regex, arguments[i]);
        }
        return str;
    };

    String.prototype.truncate = function(n) {
        let splitString = this.split(' ');
        if (this.length < 4)
            return ('.').repeat(n);
        else if (n >= this.length)
            return this.toString();
        else if (splitString.length == 1){
            let result = '';
            for (let i = 0; i < this.length - n - 3; i++)
                result += this[i];
            return result + '...'
        }
        let result = splitString[0];
        for (let i = 1; i < splitString.length; i++) {
            if (result.length + splitString[i].length + 4 > n)
                return result + '...';
            result += ` ${splitString[i]}`;
        }
    }
})();

let str = '';
console.log(str = str.isEmpty());
