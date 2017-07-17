/**
 * Created by Vicky on 7/15/2017.
 */
class Player{
    constructor(nickName){
        this.nickName = nickName;
        this.scores = [];
    }
    toString(){
        let scores = this.scores.sort((a,b)=> b-a);
        return `${this.nickName}: ` + scores;
    }
    addScore(score){
        if(!Number.isInteger(score)) {
            return;
        }
        this.scores.push(score);

    }
    get scoreCount(){
        return this.scores.length;
    }
    get highestScore(){
        if(this.scores.length === 0){
            return 0;
        }
        return this.scores.reduce((a, b) => Math.max(a, b));
    }
    get topFiveScore(){
        let scores = this.scores.sort((a,b)=> b-a).slice(0, 5);
        return scores;
    }
}
let player = new Player('Misho');


console.log(player.topFiveScore);
