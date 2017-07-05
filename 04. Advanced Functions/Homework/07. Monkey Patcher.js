/**
 * Created by Vicky on 7/4/2017.
 */
function solution(input) {
    let command = input;
    if(command === 'upvote'){
        this.upvotes++;
    } else if(command ==='downvote'){
        this.downvotes++;
    } else {
        return report(this);
    }
    function report(obj) {
        let rating = '';
        let positiveVotes = obj.upvotes;
        let negativeVotes = obj.downvotes;
        let totalVotes = positiveVotes + negativeVotes;
        let balance = positiveVotes - negativeVotes;
        let reportedUpVotes = positiveVotes;
        let reportedDownVotes = negativeVotes;
        if(totalVotes > 50){
            let votesToAdd = Math.ceil(Math.max(positiveVotes, negativeVotes)*0.25);
            reportedUpVotes += votesToAdd;
            reportedDownVotes += votesToAdd;
        }
        if(totalVotes < 10){
            rating = 'new';
        } else if(positiveVotes/totalVotes > 0.66){
            rating = 'hot';
        } else if (balance >= 0 &&(positiveVotes > 100 || negativeVotes > 100)){
            rating = 'controversial';
        } else if(balance < 0){
            rating = 'unpopular';
        } else {
            rating = 'new';
        }
        return [reportedUpVotes, reportedDownVotes, balance, rating];
    }
}
let forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

solution.call(forumPost, 'upvote');
console.log(solution.call(forumPost, 'score'));;
