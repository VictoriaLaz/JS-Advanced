/**
 * Created by Vicky on 6/28/2017.
 */
function createBook(selector, title, author, ISBN) {

    let bookGenerator = (function () {
        let id = 1;
        return function (selector, title, author, ISBN) {
            let wrapper = $(selector);
            let section = document.createDocumentFragment();
            let div = $('<div>').attr('id', `book${id}`).css('border', 'none');
            let bookTitle = $(`<p>${title}</p>`).addClass('title');
            let bookAauthor = $(`<p>${author}</p>`).addClass('author');
            let isbn = $(`<p>${ISBN}</p>`).addClass('isbn');
            let selectBtn = $('<button>Select</button>').click(function () {
                $(this).parent().css('border', '2px solid blue');
            });
            let deselectBtn = $('<button>Deselect</button>').click(function () {
                $(this).parent().css('border', 'none');
            });
            bookTitle.appendTo(div);
            bookAauthor.appendTo(div);
            isbn.appendTo(div);
            selectBtn.appendTo(div);
            deselectBtn.appendTo(div);
            div.appendTo(section);
            wrapper.append(section);
            id++;
        }
    }());
    bookGenerator(selector, title, author, ISBN);

}