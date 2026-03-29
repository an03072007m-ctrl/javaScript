let students = [];
function addStudent(id,name,score){
    students.push({id,name,score});
}
function getGoodStudents(){
    return students.filter(s=>s.score >=8)


}
function getTopStudents(){
     students.sort((a,b)=> b.score - a.score);
    return [students[0],students[3]|| null];


}
addStudent(1, "Hai", 8);
addStudent(2, "Nam", 6);
addStudent(3, "Linh", 9);

console.log(getGoodStudents());
console.log(getTopStudents());

