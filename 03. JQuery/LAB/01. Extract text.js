/**
 * Created by Vicky on 6/27/2017.
 */
function extractText() {
    let lis = $('li').toArray().map(li=>li.textContent).join(', ');
    $('#result').text(lis);

}