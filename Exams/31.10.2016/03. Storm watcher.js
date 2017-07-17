/**
 * Created by Vicky on 7/17/2017.
 */
let Record = (function (temperature, humidity, pressure, windSpeed) {
    let id = 0;

    return class {

        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = id++;
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
        }

        toString() {
            let status;
            if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25) {
                status = 'Stormy';
            } else {
                status = 'Not stormy';
            }
            return `Reading ID: ${this.id}
Temperature: ${this.temperature}*C
Relative Humidity: ${this.humidity}%
Pressure: ${this.pressure}hpa
Wind Speed: ${this.windSpeed}m/s
Weather: ${status}`
        }
    }
})();

let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());;

let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());;

