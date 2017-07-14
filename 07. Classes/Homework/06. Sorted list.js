
function createSortedList() {
    return class SortedList{
        constructor(){
            this.internalList = [];
            this.size = 0
        }

        add(element) {
            this.internalList.push(element);
            this.size++;
            this.sortList();
        }
        remove(index) {
            if(index >= 0 && index < this.internalList.length) {
                this.internalList.splice(index, 1);
                this.size--;
            }
        }
        get(index) {
            if(index >= 0 && index < this.internalList.length) {
                return this.internalList[index];
            }
        }

        sortList() {
            this.internalList = this.internalList.sort((a, b) => a-b);
        }
    }
}