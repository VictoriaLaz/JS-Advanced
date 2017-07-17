/**
 * Created by Vicky on 7/17/2017.
 */
class TitleBar{
    constructor(webpage){
        this.webpage = webpage;
        this.links = [];
    }
    addLink(href, name){
        this.links.push([href, name]);
    }
    appendTo(selector){
        let wrapper = $(selector);
        let header = $('<header class="header"></header>');
        let headerRow = $(`<div class="header-row"></div>`);
        let button = $('<a class="button">&#9776;</a>');
        button.on('click', function () {
            let theDrawer = $('.drawer');
            if(theDrawer.css('display') === 'none'){
                theDrawer.css('display', 'block');
            } else {
                theDrawer.css('display', 'none');
            }
        });
        let title = $(`<span class="title">${this.webpage}</span>`);
        let drawer = $('<div class="drawer"></div>');
        let menu = $('<nav class="menu"></nav>');
        for (let link of this.links) {
            menu.append(`<a class="menu-link" href="${link[0]}">${link[1]}</a>`);
        }

        drawer.append(menu);
        headerRow.append(button);
        headerRow.append(title);
        header.append(headerRow);
        header.append(drawer);
        wrapper.prepend(header);
    }
}
