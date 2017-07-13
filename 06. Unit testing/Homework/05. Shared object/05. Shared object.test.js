
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let expect = require('chai').expect;
let sharedObject = require('./05. Shared object.js').sharedObject;



document.body.innerHTML =
    `<div id="wrapper"><input type="text" id="name"><input type="text" id="income"></div>`;

describe('shared object', function () {
    let object;
    beforeEach(function () {
        object = sharedObject;
    });
    describe('initial state', function () {
        it('name should return null', function () {
            expect(object.name).to.be.equal(null);
        });
        it('income should return null', function () {
            expect(object.income).to.be.equal(null);
        });
    });
    describe('change name', function () {
        it('changeName should not change the name property if an invalid value is passed, with preexisting value', function(){
            object.name = "randomValue";
            object.changeName('');
            expect(object.name).to.be.equal("randomValue");
        });

        it('changeName should not change the textbox value if an invalid value is passed, with preexisting value', function(){
            $('#name').val("Gosho");
            object.changeName('');
            expect( $('#name').val()).to.be.equal("Gosho");
        });

    })
});
