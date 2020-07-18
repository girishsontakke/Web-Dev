//let + const
const player = 'bobby'; // cannot change the value of player
let experience = 100;
let wizardlevel = false;

if(experience > 90){
    let wizardlevel = true; // create new scope inside curly bracess only
    console.log("inside", wizardlevel);
}

console.log("outside", wizardlevel);

// dynamic properties of object 

const name = 'john snow';
const obj = {
    [name]: 'hello',
    [1 + 2]: 3, 
}
console.log(obj);

const a='simon';
const b = true;
const c = {};
const obj1 = {a, b, c}
console.log(obj1);

//########## template string #########///
console.log(`hello ${name} you seem to be ${b}`)

// ######### default argument ########//
function greet(name="girish", age='20'){
    console.log(`hi ${name} you seem to be ${age}`);
}
greet();
greet('tejas', 18);

// ########## symbol ############//
let sym = Symbol();
let sym1 = Symbol('foo');

console.log(sym, sym1);

// ######## arrow function ##########//
const add = (a,b) => a+b;
console.log(add(4,5));