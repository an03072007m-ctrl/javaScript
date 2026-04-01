let users =[
    {name: "Bin"},
    {name: "Bon"},
    {name: "Bi"},
    {name: "Pon"}
]
function findUser(users,name){
    return users.find(n => n.name === name) || null
}
console.log(findUser(users,"Bin"))
