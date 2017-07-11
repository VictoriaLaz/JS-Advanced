/**
 * Created by Vicky on 7/7/2017.
 */
let assemble = (function () {
    let engines = {
        small : {
            power:90,
            volume:1800,
        },
        normal: {
            power:120,
            volume:2400,
        },
        monster:{
            power:200,
            volume:3500
        }
    };
    let carriages = {
        hatchback: {
            type: 'hatchback',
            color:''
        },
        coupe: {
            type: 'coupe',
            color:''
        }
    };
    return function (obj) {
        let assembledCar = {};
        assembledCar.model = obj.model;

        if(obj.power<=90){
            assembledCar.engine = engines.small;
        } else if (obj.power<=120){
            assembledCar.engine = engines.normal;
        } else {
            assembledCar.engine = engines.monster;
        }

        if(obj.carriage === 'hatchback'){
            assembledCar.carriage = carriages.hatchback;
        } else {
            assembledCar.carriage = carriages.coupe;
        }

        assembledCar.carriage.color = obj.color;

        let tires = [];
        let newSize = 0;
        if(obj.wheelsize %2 === 0){
            newSize = obj.wheelsize-1;
        } else {
            newSize = obj.wheelsize;
        }
        assembledCar.wheels = [newSize, newSize, newSize, newSize]
        return assembledCar;
    }
})();
let car = { model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
console.log(assemble(car));;