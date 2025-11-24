class Stack {
    constructor() {
        this.data = {};
        this.topIndex = -1;
    }      

    traverse() {
        let output = "";
        for (let i = 0; i <= this.topIndex; i++) {
            output += this.data[i] + " ";
        }
        console.log(output);
    }

    push(element) {
        this.topIndex++;
        this.data[this.topIndex] = element;
    }

}

//
let stack1 = new Stack();
stack1.push(2);
stack1.traverse();
stack1.push(3);
stack1.traverse();
stack1.push(1)
stack1.traverse();