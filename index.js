/****************Q1 ****************** */
class Stack {
    
    constructor() {
        this.items = [];
    }

    
    push(value) {
        this.items.push(value);
    }


    pop() {
        if (this.items.length === 0) {
            throw new Error("Underflow: Stack is empty");
        }
        return this.items.pop();
    }

 
    peek() {
        if (this.items.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }

    print() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

let obj = new Stack();
obj.push(1);
obj.push(2);
obj.push(3);
obj.push(4);
obj.push(5);

let reverseArr = [];
len = obj.items.length;

for(let x=0; x<len; x++){

     reverseArr[x] = obj.peek();
 
     obj.pop();
}

console.log(reverseArr);
/****************Q3 ****************** */


function sum(array){
    
    if(array.length < 1){
        return 0;
    }
        
   return   array.pop() + sum(array);

}

 let array = [1,2,3,4];
 console.log(sum(array));

 


 /****************Q5 ****************** */

 class Node {
    constructor(value) {
        this.value = value; 
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0; 
    }

    addNode(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    deleteMiddle() {
        if (this.length < 2) {
           
            return;
        }

        let midIndex = Math.floor(this.length / 2);
        let current = this.head;
        let prev = null;

        for (let i = 0; i < midIndex; i++) {
            prev = current;
            current = current.next;
        }

        if (prev !== null) {
            prev.next = current.next;
        }

        this.length--; 
    }

    printList() {
        if (!this.head) {
            console.log("The list is empty.");
            return;
        }

        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage:
let list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);

console.log("Original list:");
list.printList();

list.deleteMiddle();

console.log("List after deleting the middle node:");
list.printList();


/***************** q4************* */
function reverseLinkedList(linkedList) {
    let prev = null;
    let current = linkedList.head;
    let next = null;

    while (current !== null) {
        next = current.next;  // Store next
        current.next = prev;  // Reverse current node's pointer
        prev = current;       // Move pointers one position ahead
        current = next;
    }

    linkedList.head = prev; // Update head to the new first element

    return linkedList;
}

// Example usage:
let list2 = new LinkedList();
list2.addNode(1);
list2.addNode(2);
list2.addNode(3);
list2.addNode(4);
list2.addNode(5);

console.log("Original list:");
list.printList();

reverseLinkedList(list2);

console.log("Reversed list:");
list.printList();