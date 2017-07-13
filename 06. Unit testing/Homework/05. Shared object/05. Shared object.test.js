
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let expect = require('chai').expect;
let sharedObject = require('./05. Shared object.js').sharedObject;



document.body.innerHTML =
    `<div id="wrapper"><input type="text" id="name"><input type="text" id="income"></div>`;

describe('shared object', function () {


    describe('initial state', function () {
        it('name should return null', function () {
            expect(sharedObject.name).to.be.equal(null);
        });
        it('income should return null', function () {
            expect(sharedObject.income).to.be.equal(null);
        });
    });
    describe('change name', function () {
        it('changeName should not change the name property if an invalid value is passed, with preexisting value', function(){
            sharedObject.name = "randomValue";
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.equal("randomValue");
        });

        it('changeName should not change the textbox value if an invalid value is passed, with preexisting value', function(){
            $('#name').val("Gosho");
            sharedObject.changeName('');
            expect( $('#name').val()).to.be.equal("Gosho");
        });
        it('changeName should change the name property if a valid value is passed, with preexisting value', function(){
            sharedObject.name = "randomValue";
            sharedObject.changeName('newRandomValue');
            expect(sharedObject.name).to.be.equal("newRandomValue");
        });
        it('changeName should not change the textbox value if a valid value is passed, with preexisting value', function(){
            $('#name').val("Gosho");
            sharedObject.changeName('Stamat');
            expect( $('#name').val()).to.be.equal("Stamat");
        });
    });
    describe('changeIncome', function () {
        it('changeIncome should not change the income property if an invalid value is passed, with preexisting value', function(){
            sharedObject.income = 5;
            sharedObject.changeIncome('Hello');
            expect(sharedObject.income).to.be.equal(5);
        });
        it('changeIncome should not change the income property if an invalid value is passed, with preexisting value', function(){
            sharedObject.income = 5;
            sharedObject.changeIncome(-5);
            expect(sharedObject.income).to.be.equal(5);
        });
        it('changeIncome should not change the income property if an invalid value is passed, with preexisting value', function(){
            sharedObject.income = 5;
            sharedObject.changeIncome(3.5);
            expect(sharedObject.income).to.be.equal(5);
        });
        it('changeIncome should not change the income input if an invalid value is passed, with preexisting value', function(){
            $('#income').val(5);
            sharedObject.changeIncome(-5);
            expect($('#income').val()).to.be.equal('5');
        });
        it('changeIncome should not change the income input if an invalid value is passed, with preexisting value', function(){
            $('#income').val(5);
            sharedObject.changeIncome('hello');
            expect($('#income').val()).to.be.equal('5');
        });
        it('changeIncome should not change the income input if an invalid value is passed, with preexisting value', function(){
            $('#income').val(5);
            sharedObject.changeIncome(3.3);
            expect($('#income').val()).to.be.equal('5');
        });
        it('changeIncome should change the income property if an invalid value is passed, with preexisting value', function(){
            sharedObject.income = 5;
            sharedObject.changeIncome(10);
            expect(sharedObject.income).to.be.equal(10);
        });
        it('changeIncome should change the income input if an invalid value is passed, with preexisting value', function(){
            $('#income').val(5);
            sharedObject.changeIncome(10);
            expect($('#income').val()).to.be.equal('10');
        });
    });
    describe('updateName', function () {


        it('updateName should not change the name property if an invalid value is passed, with preexisting value', function(){
            $('#name').val('randomValue');
            sharedObject.updateName('');
            expect(sharedObject.name).to.be.equal("randomValue");
        });


        it('updateName should change the name property if a valid value is passed, with preexisting value', function(){
            $('#name').val('newrandomValue');
            sharedObject.updateName('newRandomValue');
            expect(sharedObject.name).to.be.equal("newRandomValue");
        });
        it('updateName should not change the textbox value if a valid value is passed, with preexisting value', function(){
            name = "Gosho";
            sharedObject.updateName('Stamat');
            expect(name).to.be.equal("Stamat");
        });
    })
});
