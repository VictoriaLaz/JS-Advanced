/**
 * Created by Vicky on 6/28/2017.
 */
function increment(selector) {
        let container = $(selector);
        let fragment = document.createDocumentFragment();
        let text = $('<textarea>');
        let incBtn = $('<button>Increment</button>');
        let addBtn = $('<button>Add</button>');
        let list = $('<ul>');
        text.val(0);
        text.addClass('counter');
        text.attr('disabled', true);

        incBtn.addClass('btn');
        incBtn.attr('id','incrementBtn');

        addBtn.addClass('btn');
        incBtn.attr('id','addBtn');
        
        list.addClass('results');

        $(incBtn).click(function () {
            text.val(+text.val()+1)
        });
        
        $(addBtn).click(function () {
            let li = $(`<li>${text.val()}</li>`);
            li.appendTo(list);
        });

        text.appendTo(fragment);
        incBtn.appendTo(fragment);
        addBtn.appendTo(fragment);
        list.appendTo(fragment);
        container.append(fragment);
}
