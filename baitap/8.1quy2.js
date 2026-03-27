let no1 = {value:10, next: null};
let no2 = {value:15, next: null};
let no3 = {value:20, next: null};
let no4 = {value:30,next:null};
no1.next = no2;
no2.next = no3;
no3.next = no4;

no2.next = no4;
let current =no1
while (current){
    console.log(current.value);
    current = current.next;
}