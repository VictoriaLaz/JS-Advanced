/**
 * Created by Vicky on 7/7/2017.
 */
function checkAlcohol(obj) {
    if(obj.handsShaking){
        obj.bloodAlcoholLevel += 0.1*Number(obj.weight)*Number(obj.experience);
        obj.handsShaking = false;
    }
    return obj;
}
let worker = { weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }
console.log(checkAlcohol(worker));;