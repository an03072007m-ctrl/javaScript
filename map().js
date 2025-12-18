const users = [
    { name: "Huy", age: 20 },
    { name: "An", age: 21 }
];

const names = users.map(u =>  {
    return {name: u.name}} );

console.log(names);
