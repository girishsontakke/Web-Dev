const languages = ['python', 'cpp', 'javascript', 'java', 'dart']

////// ########## for of ############ ///////
for(lan of languages){
    console.log(lan);
}
console.log("");

// ########## for in ########## //
//works with objects
//enumerating

let obj = {
    apples:5,
    oranges:2,
    grapes:4
}
for(item in obj){
    console.log(item);
}