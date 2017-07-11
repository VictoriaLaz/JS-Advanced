/**
 * Created by Vicky on 7/11/2017.
 */
function makeCard(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['S','H','D','C'];
    if(!faces.includes(face)){
        throw new Error('Invalid face');
    }
    if(!suits.includes(suit)){
        throw new Error('Invalid suit');
    }
    let suitsCodes = {
        S:'\u2660',
        H:'\u2665',
        D:'\u2666',
        C:'\u2663'
    };
    return{
        face: face,
        suit: suit,
        toString: function () {
            return `${this.face}${suitsCodes[this.suit]}`
        }
    }
}
console.log('' + makeCard('1', 'C'));