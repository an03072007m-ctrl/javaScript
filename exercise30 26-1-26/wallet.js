const walletA = {
    owner: "Hai",
    balance: 1000,
    transactions: []
};

const walletB = {
    owner: "Linh",
    balance: 500,
    transactions: []
};
function createWallet (owner, balance = 0){
    return{
        owner,
        balance,
        transactions: []
    }
}
console.log(createWallet("Hai",1000))
console.log(createWallet("Linh",500))