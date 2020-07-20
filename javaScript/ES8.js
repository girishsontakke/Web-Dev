// ########### Text Allignment #########//
let s = 'hello';
console.log(s.padStart(10));
console.log(s.padEnd(10), 'World');

// ########## Object as array ###########//
let obj = {
    user0 : 'Girish',
    user1 : 'Tanmay',
    user2 : 'Sai'
}

console.log('');
Object.keys(obj).forEach((key)=> console.log(key, obj[key]));


console.log('');
Object.values(obj).forEach((val) => console.log(val));

console.log('');
Object.entries(obj).forEach(ent=>console.log(ent));

let n = Object.entries(obj).map(val=> val[1] + val[0].replace('user',''));
console.log(n);
