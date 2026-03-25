let node1 ={value:5, next:null};
let node2={value:10,next:null};
let node3 ={value:15,next: null};

node1.next = node2
node2.next = node3
let node4 = {value: 7,next:null};
node1.next = node4
node4.next = node2
let current = node1
while (current){
    console.log(current.value);
    current = current.next;
}
