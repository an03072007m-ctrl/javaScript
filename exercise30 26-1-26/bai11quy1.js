let users = [
    {name: "Hai", isActive:true},
    {name: "Linh", isActive: false},
    {name: "Nam", isActive: true},
];

// tim kiem nguoi isActive
function countActiveUsers(users) {

    let count = 0;

    for (let i = 0; i < users.length; i++) {
        if (users[i].isActive) {
            count++;
        }

    }

    return count;

}

console.log("ActiveUsers",countActiveUsers(users));

//Kiem ten 1 nguoi bat ki

function findUser( users, name){


    for (let i = 0; i < users.length; i++){
        if (users[i].name=== name){
            return users[i];
        }

    }

    return null;


} const user = findUser(users,"Nam")

console.log(user);
function getUserNames(users) {

    let names = [];

    for (let i = 0; i < users.length; i++) {
        names.push(users[i].name);
    }

    return names;

}

console.log(getUserNames(users));

//Kiem ten nhieu nguoi

function findUsers(users, names){

    const result = [];

    for (let i = 0; i < users.length; i++){

        if (names.includes(users[i].name)){
            result.push(users[i]);
        }

    }

    return result;

}
console.log(findUsers(users,["Nam","Linh","Hai","Nam","pon"]));
// kiem tra user co ton tai khong
function hasUser(users, name){
    for (let i = 0; i <users.length; i++){
        if(users[i].name === name){
            return true;
        }
    }
    return false;

}
console.log(hasUser(users,"Nam"));
console.log(hasUser(users,"Han"));