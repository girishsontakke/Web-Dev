// ####### flat ############//
// let array = [1,[2,5,6,7], 3, 5, [4,3,12]];
// array.flat();
// console.log(array);
// not implemented in many browsers and node but can be used in chrome, firefox

// ################## trim() ###########//
let email = "               girish@company.com      ";
console.log(email.trim());
console.log(email.trimEnd());
console.log(email.trimStart());


//################  fromEntries #############//
// let user = [['girish', 23],['mahesh', 25],['chetan', 36]];
// let x = Object.fromEntries(user);
///////// not supported in node //////////////