var array = ["Banana", "Apples", "Oranges", "Blueberries", 1];
console.log(array.shift());
console.log(array.pop())
console.log(array.sort());
console.log(array.push('Kiwi'));
console.log(array.splice(0,1));
console.log(array.reverse());
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);