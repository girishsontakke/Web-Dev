// forEach
const array = [1,2,10,16];

const newarray=[];
array.forEach(x => newarray.push(x*2));
console.log(newarray);

//########### map ######## //
let triplearray = array.map(x => x * 3);
console.log('triplearray', triplearray);

//######### filter #######//
const filterarray = triplearray.filter(x=> x%2==0);
console.log('filterarray', filterarray);

// ########## reduce #######/
const reducearray = array.reduce((acc, x) => acc + x);
console.log('reducearray', reducearray);