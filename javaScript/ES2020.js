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
let employ = {
  name: "girish",
  age: 20,
};

let salary = employ?.salary;
let age = employ?.age;

console.log("salary" + salary);
console.log("age" + age);

// Nullish Coalescing Operator
let efficiency = employ?.efficiency ?? "efficiency not given";
