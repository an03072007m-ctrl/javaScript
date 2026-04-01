let students = [
    {name:"BU", score:10},
    {name:"Bơ", score:8},
    {name:"Bi", score:7},
    {name:"Pon", score:7}
];
function goodStudents(){
   return students
        .filter(n => n.score >=8)
        .map(student => student.name)
}
console.log(goodStudents());