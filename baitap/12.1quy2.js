
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

function getGoodStudents(){
    return students.filter(s=>s.score >=8)


}
function getTopStudents(){
    if(students.length ===0)return null
    let sorted =[...students].sort((a,b)=> b.score - a.score);
    return [sorted[0]|| null];


}
addStudent(1, "Hai", 8);
addStudent(2, "Nam", 6);
addStudent(3, "Linh", 9);
console.log(findStudent("Nam"));

console.log(getAverageScore());
console.log(getGoodStudents());
console.log(getTopStudents());