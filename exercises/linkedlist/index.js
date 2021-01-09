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
            return null;
        }

        if(!this.head.next){
            this.head = null;
            return;
        }

        let tempNode = this.head;
        let lastNode;
        while(tempNode.next){
            lastNode = tempNode;
            tempNode = tempNode.next;
        }
        lastNode.next = null;
    }
    
    insertLast(data){
        const last = this.getLast();
        if(last){
            last.next = new Node(data);
        } else {
            this.insertFirst(data);  
        }
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

    getAt(n){
        if(!this.head){
            return null;
        }
        //Bad code, iterates twice! 
        /*
        if (n > this.size()){
            return;
        }                 
   
        let tempNode = this.head;
        for(let i = 0; i < n; i ++){
            tempNode = tempNode.next;
        }
        return tempNode;
        */    
        let count = 0;
        let node = this.head;
        while(node) {
            if(count === n){
                return node;
            }
            count++;
            node = node.next;
        }
        return null
    }

    clear(){
        this.head = null;
    }
}

module.exports = { Node, LinkedList };
