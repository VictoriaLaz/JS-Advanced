class Task{

    constructor(title, deadline){
        this.title = title;
        if(deadline < Date.now()){
            throw new Error('Date has passed')
        } else {
            this._deadline = deadline;
        }
        this.status = 'Open';
    }

    get deadline() {
        return this._deadline;
    }
    set deadline(date){
        if(date < Date.now()){
            throw new Error('Date expired')
        }
        this._deadline = date;
    }
    get status(){
        return this._status;
    }
    set status(string){
        this._status = string;
    }
    get isOverdue(){
        return this.deadline < Date.now()&& this.status !== 'Complete';
    }
    static comparator(a, b) {
        if (getImportance(a) < getImportance(b)) {
            return -1;
        } else if(getImportance(a) > getImportance(b)){
            return 1;
        } else {
            return a.deadline > b.deadline;
        }
        function getImportance(task) {
            if(task.isOverdue){
                return 0;
            } else if(task.status === 'In Progress'){
                return 1;
            } else if(task.status === 'Open'){
                return 2;
            } else if(task.status === 'Complete'){
                return 3;
            }
        }
    }
    toString(){
        let statusIcon = '';
        if(this.isOverdue){
            statusIcon = "\u26A0";
        } else if (this.status === 'Open'){
            statusIcon = "\u2731";
        } else if( this.status === "In Progress"){
            statusIcon = "\u219D"
        } else if (this.status === "Complete"){
            statusIcon = "\u2714";
        }
        if(this.isOverdue){
            return `[${statusIcon}] ${this.title} (overdue)`;
        } if(this.status === 'Complete'){
            return `[${statusIcon}] ${this.title}`;
        } else {
            return `[${statusIcon}] ${this.title} (deadline: ${this.deadline})`
        }
    }
}
let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later
