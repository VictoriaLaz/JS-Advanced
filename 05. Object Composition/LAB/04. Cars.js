/**
 * Created by Vicky on 7/7/2017.
 */
function objectCreation(arr) {
    let cars = new Map();
    let executor = (function () {
        function create(name,arg, parent) {
            if(parent){
                cars.set(name,Object.create(cars.get(parent)));
            } else {
                cars.set(name, {});
            }
        }
        function set(name, key, value) {
            let car = cars.get(name);
            car[key] = value;
        }
        function print(name) {
            let obj = cars.get(name);
            let objects = [];
            for (let key in obj) {
                objects.push((`${key}:${obj[key]}`));
            }
            console.log(objects.join(', '));
        }
        return{create, set, print};
    })();
    for (let obj of arr) {
        let [command, name, arg ,name2] = obj.split(' ');
        executor[command](name, arg, name2)
    }
}
objectCreation(['create c1','create c2 inherit c1','set c1 color red','set c2 model new','print c1','print c2']);
