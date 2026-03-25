let orders = [
    {id:1, price:100},
    {id:2, price:200},
    {id:3, price:300}
];
let sum = orders.reduce((total,n)=> total +n.price,0)
let bigOrder = orders.filter(n => n.price > 150)
let bigids = bigOrder.map(n => n.id)

console.log(sum);
console.log(bigOrder)
console.log(bigids)