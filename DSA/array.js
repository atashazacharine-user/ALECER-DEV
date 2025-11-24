class Array {
    constructor(initialData = []) {
        this.data = {};
        this.length = 0;

        for (let i = 0; i < initialData.length; i++) {
            this.data[i] = initialData[i];
            this.length++;
        }
    }

    traverse() {
        let output = "";

        for (let i = 0; i < this.length; i++) {
            output += this.data[i] + " ";
        }
        console.log(output);
    }

    insert(index, data) {
        //Correcting index
        if (index < 0 || index > this.length) {
            console.log("Invalid Index");
            return;
        }

        // Shifting elements
        for (let i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }

        this.data[index] = data;  
        this.length++;
    }

    search(element) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === element) return i;
        }
        console.log(element + " is not found");
        return -1;
    }
}



arr1 = new Array([4,2,3]);

arr1.traverse();
arr1.insert(0,50);
arr1.traverse();
console.log(arr1.search(50));
console.log(arr1.search(10));
