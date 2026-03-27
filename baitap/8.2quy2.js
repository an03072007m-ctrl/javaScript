
let node1 = { value:10, next: null};
let node2 = { value:15, next: null};
let node3 = {value: 20, next: null};
let node4 = {value: 30, next: null};
node1.next = node2
node2.next = node3
node3.next = node4

function deleteValue(head, value){
    let current = head;
    while(current!==null&& current.next !== null){
        if ( current.next.value === value ){
            current.next = current.next.next;
            break;
        }
        current = current.next;

    }
    return head

}
let head = node1;

head = deleteValue(head, 20);

console.log(head);