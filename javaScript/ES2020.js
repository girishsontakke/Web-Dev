/*
BigInt
Nullish Coalescing Operator ??
Optional Chaining Operator ?
Promise.allSettled
globalThis
*/

// BigInt
console.log(typeof 1n);
console.log(Number.MAX_SAFE_INTEGER);

// Optional Chaining operator

/* ?. operator functions similarly to the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined
 */

let employ = {
  name: "girish",
  age: 20,
};

let salary = employ.salary?.value;
let age = employ?.age;

console.log("salary = " + salary);
console.log("age = " + age);

// Nullish Coalescing Operator
let efficiency = employ.efficiency ?? "efficiency not given";
console.log(efficiency);
