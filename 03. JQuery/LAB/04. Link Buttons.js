/**
 * Created by Vicky on 6/28/2017.
 */
function attachEvents() {
    $('a').click(addClass);
    function addClass() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}