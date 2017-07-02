/**
 * Created by Vicky on 7/1/2017.
 */
function domSearch(selector, value = false) {
        let container = $(selector);
        let fragment = document.createDocumentFragment();
        $('#content').addClass('items-control');

        let addDiv = $('<div>').addClass('add-controls');
        let enterText = $('<label>Enter text: </label>');
        let newLi = $('<input>');
        let addBtn = $('<a href="#">Add</a>').addClass('button').css('display', 'inline-block');

        newLi.appendTo(enterText);
        enterText.appendTo(addDiv);
        addBtn.appendTo(addDiv);

        let searchDiv = $('<div>').addClass('search-controls');
        let enterTextToSearch = $('<label>Search: </label>');
        let searchLi = $('<input>');
        searchLi.appendTo(enterTextToSearch);
        enterTextToSearch.appendTo(searchDiv);

        let resultDiv = $('<div>').addClass('result-controls');
        let ul = $('<ul>').addClass('items-list');
        ul.appendTo(resultDiv);

    addBtn.click(function () {
        let textToAdd = newLi;
        let textToAddValue = textToAdd.val();
        if(textToAddValue.trim()!== '') {
            let li = $('<li>').addClass('list-item');
            let liButton = $('<a href="#">X</a>').addClass('button');
            let text = $(`<strong>${textToAddValue}</strong>`);

            liButton.appendTo(li);
            text.appendTo(li);
            li.appendTo(ul);
            liButton.click(function () {
                li.remove();
            });
        }
        textToAdd.val('');
    });


    searchLi.keyup(function () {
        let textToSearch = searchLi.val();
        $('.items-list .list-item').css('display', 'block');
        if(value) {
            $(`.items-list .list-item:not(:contains(${textToSearch}))`)
                .css('display', 'none');
        } else {

            $('.items-list .list-item')
                .filter((index, item) => !$(item).find("strong").text().toLowerCase().includes(textToSearch.toLowerCase()))
                .css('display', 'none');
        }
    });

        addDiv.appendTo(fragment);
        searchDiv.appendTo(fragment);
        resultDiv.appendTo(fragment);
        container.append(fragment);
}