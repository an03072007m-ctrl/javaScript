let students = [
    {name:"Hai", score:8},
    {name:"Nam", score:6},
    {name:"Linh", score:9}
];
let good = students
.filter(n =>n.score>= 7)
    .map(n =>n.name)
console.log("good students ",good);
let sum = students
    .reduce((value,n)=> value +n.score,0);
console.log("sum",sum)
let usergood = students
    .filter(n =>n.score>= 8)
    .map(n =>n.name)
console.log("usergood students ",usergood);