/**
 * Created by Vicky on 7/8/2017.
 */
function createSortedList() {
    return {
        internalList : [],
        size: 0,
        add: function (element) {
            this.internalList.push(element);
            this.size++;
            this.sortList();
        },
        remove: function (index) {
            if(index >= 0 && index < this.internalList.length) {
                this.internalList.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            if(index >= 0 && index < this.internalList.length) {
                return this.internalList[index];
            }
        },

        sortList: function () {
            this.internalList = this.internalList.sort((a, b) => a-b);
        }
    }
}