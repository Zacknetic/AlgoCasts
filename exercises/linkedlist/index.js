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
        return this.getAt(0);

        //return this.head;
    }

    removeFirst(){
        this.removeAt(0);
        /*
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        */
    }

    removeLast(){
        this.removeAt(this.size()-1)
        /*
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
        */
    }
    
    insertLast(data){
        this.insertAt(data, this.size())
        /*
        const last = this.getLast();
        if(last){
            last.next = new Node(data);
        } else {
            this.insertFirst(data);  
        }*/
    }
    
    getLast(){
        return this.getAt(this.size()-1)
        /*
        if(!this.head){
            return null;
        }
        let tempNode = this.head;
        let lastNode;
        while(tempNode){
            lastNode = tempNode;
            tempNode = tempNode.next;
        }
        return lastNode;*/
    }



    getAt(index){
        if(!this.head){
            return null;
        }  
        let count = 0;
        let node = this.head;
        while(node) {
            if(count === index){
                return node;
            }
            count++;
            node = node.next;
        }
        return null
    }

    removeAt(index){
        if(!this.head){
            return null;
        }

        if(index === 0){
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if(!previous || !previous.next){
            return;
        }
        previous.next = previous.next.next;
        
    }

    insertAt(data, index){
        if(!this.head){
            this.head = new Node(data);
            return;
        }

        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        }
        const previousNode = this.getAt(index - 1) || this.getLast();
        const nextNode = previousNode.next;

        previousNode.next = new Node(data);
        previousNode.next.next = nextNode;
    }

    clear(){
        this.head = null;
    }

    forEach(fn){
        let node = this.head;
        while(node){
            fn(node);
            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while(node){
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
