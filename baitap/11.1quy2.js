let students = [
    {name:"Hai", score:8},
    {name:"Nam", score:6},
    {name:"Linh", score:9}
];
students.sort((a,b)=>b.score - a.score);
console.log(students);