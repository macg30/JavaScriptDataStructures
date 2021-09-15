//Standar path
const array = ['Moises','Karen','Diego']

array.push('Ana')



//Detailed path

class MyArray {
    constructor(){
        this.legth = 0;
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.legth] = item;
        this.legth++;
        return this.data;
    }

    pop() {
        const lastItem = this.data[this.legth - 1];
        delete this.data[this.legth - 1];
        this.legth--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);

        return item;
    }
    
    shiftIndex(index) {
        for(let i = index; i < this.legth - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.legth - 1]
        this.legth--;
    }

    //TODO Method Add item at begin

    //TODO Method Delete item at begin
}

const myArray = new MyArray();

myArray.push("Jose");
myArray.push("Adriana");
myArray.push("Oscar");
myArray.push("Moises");

console.log(myArray)
console.log(myArray.get(1))

myArray.pop()

console.log(myArray)

myArray.delete(1)

console.log(myArray)