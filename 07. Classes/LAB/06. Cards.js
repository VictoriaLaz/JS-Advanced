/**
 * Created by Vicky on 7/14/2017.
 */
let solve = (function () {
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣',
    };
    let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card{
        constructor(face, suit){

            this.face = face;
            this.suit = suit;
        }
        get face() {
            return this._face;
        }

        set face(value) {
            if(!faces.includes(value)){
                throw new Error('Invalid face');
            }
            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            let suitValues = Object.keys(Suits).map(a=>Suits[a]);
            if(!suitValues.includes(value)){
                throw new Error('Invalid suit')
            }
            this._suit = value;
        }
        toString(){
            return this.face + this.suit;
        }
    }

    return{
        Suits:Suits,
        Card:Card
    }
})();