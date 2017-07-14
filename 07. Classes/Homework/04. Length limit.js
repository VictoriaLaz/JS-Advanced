/**
 * Created by Vicky on 7/14/2017.
 */
class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }
    increase(num){
        this.innerLength += num;
    }
    decrease(num){
        if(num > this.innerLength){
            this.innerLength = 0;
        } else {
            this.innerLength -= num;
        }
    }
    toString(){
        if(this.innerLength === 0){
            return '...';
        } else if(this.innerLength < this.innerString.length){
            return `${this.innerString.substr(0, this.innerLength)}...`
        } else {
            return `${this.innerString}`;
        }
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
