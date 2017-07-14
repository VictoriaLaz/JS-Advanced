/**
 * Created by Vicky on 7/14/2017.
 */
class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString(){
        return `${this.firstName}, ${this.lastName} (age:${this.age} email:${this.email})`
    }
}