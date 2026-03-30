let students = []
function addStudent(id,name,score){
    students.push({id,name,score});
}
function updateStudentScore(id, newScore){
    for(let i =0; i<students.length;i++){
    if(students[i].id===id){
        students[i].score=newScore;
        return;
    }}
}
function getWeakStudents(){
     return students.filter( n =>n.score<5 )
}
addStudent(1, "Hai", 8);
addStudent(2, "Nam", 6);
addStudent(3, "Linh", 9);

updateStudentScore(2, 4);

console.log(getWeakStudents());