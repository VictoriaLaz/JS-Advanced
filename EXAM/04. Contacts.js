/**
 * Created by Vicky on 7/23/2017.
 */
class Contact{
    constructor (firstName, lastName, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = $(`<div class="title">${this.firstName} ${this.lastName}</div>`);
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    get online(){
        return this._online;
    }
    set online(value){
        if(value === true){
            this._online = true;
            this.title.addClass('online')

        } else {
            this._online = false;
            this.title.removeClass('online')
        }
    }

    render(id) {
        let container = $(`#${id}`);
        let article = $('<article></article>')
        let title = this.title;
        if(this.online){
            this.title.addClass('online')
        } else {
            this.title.removeClass('online')
        }
        let button = $('<button>&#8505;</button>')
        let info = $('<div class="info"></div>');
        info.css('display', 'none');
        let phone = $(`<span>&phone; ${this.phone}</span>`)
        let email = $(`<span>&#9993; ${this.email}</span>`)
        info.append(phone);
        info.append(email);
        button.on('click', function (ev) {
            let parent = $(this).parent().parent();
            let infos = parent.find('.info');
            if (infos.css('display') === 'none') {
                infos.css('display', 'block')
            } else {
                infos.css('display', 'none')
            }
        });
        title.append(button);
        article.append(title);
        article.append(info);
        container.append(article);
    }
}