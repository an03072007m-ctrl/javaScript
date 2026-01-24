let student = {
    name: "Pon",
    age: 18,
    isPassed: true
};
student.age = 19
student.score = 100
if (student.isPassed ){
    console.log("pass")

} else{
    console.log("fail")
}



console.log(`Name:${student.name} 
Score: ${student.score}
Age: ${student.age}
isPassed: ${student.isPassed? "pass" : "fail"}`);
