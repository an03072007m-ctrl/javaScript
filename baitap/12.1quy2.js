
let students = [];

function addStudent(id, name, score){
    students.push({id, name, score});
}
function findStudent(name){
    return students.find(s => s.name === name) || null;
}
function getAverageScore(){
    if (students.length === 0) return 0;

    let total = students.reduce((sum, s) => sum + s.score, 0);

    return total / students.length;
}
addStudent(1, "Hai", 8);
addStudent(2, "Nam", 6);
addStudent(3, "Linh", 9);
console.log(findStudent("Nam"));

console.log(getAverageScore());