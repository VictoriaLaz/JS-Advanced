/**
 * Created by Vicky on 7/7/2017.
 */
function extendObject() {
    let object = {
        extend: function (template) {
            for(let key in template){
                if(template.hasOwnProperty(key)){
                    let element = template[key];
                    if(typeof element === 'function'){
                        Object.getPrototypeOf(object)[key] = element;
                    } else {
                        object[key] = template;
                    }
                }
            }
        }
    };
    return object;
}