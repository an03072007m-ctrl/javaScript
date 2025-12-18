const users = [
    { name: "Huy", score: 8 },
    { name: "An", score: 9 },
    { name: "Bo", score: 7 }
];

const result = users
    .filter(u => {
        return u.score >= 8;
    })
    .reduce((a, c) => {
        a.push(c.name);
        return a;
    }, []);

console.log(result);
