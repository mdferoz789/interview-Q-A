let fruits=["apple","banana","mango"]
let cart=fruits;
console.log(fruits);
console.log(cart);
cart.pop();
console.log(fruits);
console.log(cart,"after pop");
cart.push("oranges")
console.log(fruits);
console.log(cart,"after push");
// ------------------------

// after assign spread operator
let fruits1=["apple","banana","mango"]
let cart1=[...fruits1];
console.log(fruits1);
console.log(cart1);
cart1.pop();
console.log(fruits1);
console.log(cart1,"after pop1");
cart1.push("oranges")
console.log(fruits1);
console.log(cart1,"after push1");