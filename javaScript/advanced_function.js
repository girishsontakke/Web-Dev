// Closure - a function ran. the function execute. It's never going to execute again but it's going to remember there are references to those variables. so the child scope always has access to the parent scope.

// Currying 
const multiply = (a) => b => a * b;

let multiplyByFive = multiply(5);
console.log(multiplyByFive(3));


// Compose
const compose = (f, g) => a => f(g(a));
const sum = (a) => a+5;
const mul = (a) => a*5;
const ans = compose(sum, mul)(5);
console.log(ans);