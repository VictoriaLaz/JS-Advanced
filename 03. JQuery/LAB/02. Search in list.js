/**
 * Created by Vicky on 6/27/2017.
 */
function search() {
    let textToSearch = $('#searchText').val();
    let towns = $(`#towns li:contains(${textToSearch})`);
    towns.css('font-weight', 'bold');
    $('#result').text(`${towns.length} matches found`);
}