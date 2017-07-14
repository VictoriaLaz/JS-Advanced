/**
 * Created by Vicky on 7/14/2017.
 */
class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }
    unite(rat){
        if(rat instanceof Rat) {
            this.unitedRats.push(rat);
        }
    }
    getRats(){
        return this.unitedRats;
    }
    toString(){
        let string = `${this.name}`;
        for (let obj of this.unitedRats) {
            string += `\n##${obj.name}`;
        }
        return string;
    }

}
let rat = new Rat('Sasho');
console.log(rat.toString());
console.log(rat.getRats());
rat.unite(new Rat('Pencho'));
rat.unite(new Rat('Spas'));
console.log(rat.getRats());
console.log(rat.toString());