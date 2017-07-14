/**
 * Created by Vicky on 7/14/2017.
 */
class Rectangle{
    constructor (width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    };

    calcArea(){
        return this.width * this.height;
    }
}