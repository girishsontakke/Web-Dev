let a = 5;
let b = a;
b++;
console.log('a=', a ,'\nb=', b);

let obj = {a:'a', b:'b', c:{deep:'copy me'}};
let obj1 = obj;

// ############# shalow cloning #############//
let clone = Object.assign({}, obj);
let clone2 = {...obj};

// ########### deep cloning #############//
let deepclone = JSON.parse(JSON.stringify(obj))

obj.b = 5;
console.log('obj=', obj,'\nobj1=', obj, '\nclone=', clone, '\nclone2=', clone2, '\ndeepclone', deepclone);

obj.c.deep = 'copied';
console.log('\nobj=', obj,'\nobj1=', obj, '\nclone=', clone, '\nclone2=', clone2, '\ndeepclone', deepclone);

// ######## for array ######### //
let array = [1,2,3];
let referencearray = array;
let valuerearray = [].concat(array);

array.push(4);

console.log('\narray=', array, '\nreferencearray=', referencearray, '\nvaluearray=', valuerearray)
