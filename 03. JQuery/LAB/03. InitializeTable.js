/**
 * Created by Vicky on 6/28/2017.
 */
function initializeTable() {

    $('#createLink').click(createCountry);
    addCountry('Bulgaria', 'Sofia');
    addCountry('Germany', 'Berlin');
    addCountry('Russia', 'Moscow');
    fixLinks();

    function fixLinks() {
        $('#countriesTable a').css('display', 'inline');
        $('#countriesTable tr:last-child a:contains(Down)').css('display','none');
        $('#countriesTable tr:eq(2) a:contains(Up)').css('display', 'none');
    }

    function createCountry() {
        let countryName = $('#newCountryText').val();
        let countryCapital = $('#newCapitalText').val();
        addCountry(countryName, countryCapital);
    }
    
    function moveRowUp() {
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(function () {
            currentRow.insertBefore(currentRow.prev());
            currentRow.fadeIn();
            fixLinks();
        });

    }
    function moveRowDown() {
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(function () {
            currentRow.insertAfter(currentRow.next());
            currentRow.fadeIn();
            fixLinks();
        });

    }
    function deleteRow() {
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(function () {
            currentRow.remove();
            fixLinks();
        });

    }
    
    function addCountry(name, capital) {
        let newCountry = $('<tr>')
            .append($("<td>").text(name))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($('<a href="#">[Up]</a>').click(moveRowUp))
                .append(" ")
                .append($('<a href="#">[Down]</a>').click(moveRowDown))
                .append(" ")
                .append($('<a href="#">[Delete]</a>').click(deleteRow)));
        newCountry.hide();
        $('#countriesTable').append(newCountry);
        newCountry.fadeIn();
        fixLinks();
    }
}