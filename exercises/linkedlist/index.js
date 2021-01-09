// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
    }

    size(){
        let count = 0;
        let tempNode = this.head;
        while(tempNode){
            count ++;
            tempNode = tempNode.next;
        }
        return count;
    }

    getFirst(){
        return this.head;
    }

    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
    }

    removeLast(){
        if(!this.head){
            return;
        }
        let tempNode = this.head;
        for(let i = 0; i < this.size - 1; i++){
            tempNode = tempNode.next;
        }
        tempNode.next = null;
        
    }
    

    getLast(){
        if(!this.head){
            return null;
        }
        let tempNode = this.head;
        let lastNode;
        while(tempNode){
            lastNode = tempNode;
            tempNode = tempNode.next;
        }
        return lastNode;
    }

    clear(){
        this.head = null;
    }
}

module.exports = { Node, LinkedList };
