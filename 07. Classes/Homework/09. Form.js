/**
 * Created by Vicky on 7/19/2017.
 */
let result = (function() {

    class Textbox {
        constructor(selector, regex){
            this._elements = $(selector);
            this._invalidSymbols = regex;
            let that = this;
            this.elements.on('input', function (event) {
                that.value = $(this).val();
            });
        }
        get elements() {
            return this._elements;
        }
        get value(){
            return this._value;
        }
        set value(val) {
            this._value = val;
            this.elements.val(val);
        }

        isValid(){
            return (!this._invalidSymbols.test(this.value))
        }
    }

    class Form {
        constructor(){
            this._element = $('<div class="form"></div>');
            this._textboxes = [];
            for (let box of arguments) {
                if (!box instanceof Textbox) {
                    throw new Error('invalid parameters')
                }
            }
            for (let box of arguments) {
                this._element.append($(box.selector));
                this._textboxes.push(box);

            }

        }
        submit(){
            let validTexboxes = this._textboxes.filter(t=>t.isValid() === true);
            let invalidTextboxes = this._textboxes.filter(t=>t.isValid() === false);
            validTexboxes._elements.css('border', "2px solid green");
            invalidTextboxes._elements.css('border', "2px solid red");
            return(invalidTextboxes === 0);
        }
        attach(selector){
            $(selector).append($(this._element));
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

