/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 /*
var addTwoNumbers = function(l1, l2) {
    for(let i = 0; i < Math.round(l1.length / 2); i++){
        [l1[i], l1[l1.length-1-i]] = [ l1[l1.length - 1 - i], l1[i]] ;
    }
    
    for(let i = 0; i < Math.round(l2.length / 2); i++){
        [l2[i], l2[l2.length-1-i]] = [ l2[l2.length - 1 - i], l2[i]] ;
    }
    
    for(let i = 0; i < l1.length; i++){

        for(let j = 0; j < l2.length; j++){
            
        }
    }
    
    
};
*/ 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function addTwoNumbers (l1, l2) {
    const arr1 = [];
    const arr2 = [];
    while(l1){
        arr1.push(l1.next.val);
        l1 = l1.next
    }
    while(l2){
        arr2.push(l2);
        l2 = l2.next
    }
    console.log(arr1);
};

addTwoNumbers ([1,2,3], [4,5,6]);