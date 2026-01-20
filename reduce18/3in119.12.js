const items = [
    { name: "Book", price: 50 },
    { name: "Pen", price: 20 },
    { name: "Bag", price: 100 }
];

const result = items.reduce((a, c) => {
    a.sum += c.price;
    return a;
}, { sum: 0 });

console.log(result);
