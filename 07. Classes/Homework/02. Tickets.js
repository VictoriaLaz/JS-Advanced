/**
 * Created by Vicky on 7/14/2017.
 */
function sortTickets(tickets, sorting) {
    class Ticket{
        constructor(destination, price, status){
            this.destination=destination;
            this.price = price;
            this.status = status;
        }
    }
    let unsortedTickets = [];
    for (let ticket of tickets) {
        let [destination, price, status] = ticket.split('|');
        unsortedTickets.push(new Ticket(destination, Number(price), status));
    }
    let sortedTickets = unsortedTickets.sort((a, b) => b[sorting] < a[sorting]);
    return sortedTickets;
}

console.log(sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));