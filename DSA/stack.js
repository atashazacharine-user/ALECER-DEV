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

    is_empty() {
        return this.topIndex === -1;
    }
    peek(){
        //Correcting statement
        if(this.is_empty()) return null;
        return this.data[this.topIndex];{
    }

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
//console.log("Is the stack empty? " + stack1.is_empty());
console.log("Top element is: " + stack1.peek());