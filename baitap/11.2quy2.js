let students = [
    {name:"Hai", score:8},
    {name:"Nam", score:6},
    {name:"Linh", score:9}
];
students.sort((b,a)=>a.name.localeCompare(b.name))
console.log(students)