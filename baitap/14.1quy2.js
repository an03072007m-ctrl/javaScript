let stack= []
let undoHistory=[]
stack.push(1);
stack.push(2);
stack.push(3);
undoHistory.push (stack.pop())

console.log("push: ",stack)
console.log("pop: ",undoHistory)