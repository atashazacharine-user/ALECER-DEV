class Queue{
    constructor(){
        this.data = {};
        this.frontIndex = 0;
        this.readIndex = -1;

    }

    enqueue(element){
        this.readIndex++;
        this.data[this.readIndex] = element;

    }

    traverse(){
        let output = "";
        for(let i=this.frontIndex; i <= this.readIndex; i++){
            output += this.data[i] + " ";
        }

        console.log(output);
    }
}

//
let queue = new Queue();
queue.enqueue(4);
queue.enqueue(2);
queue.enqueue(3);
queue.traverse(); 
