let result = document.getElementById("res");
let zero = document.getElementById("btn0");
let one = document.getElementById("btn1");
let clear = document.getElementById("btnClr");
let eql = document.getElementById("btnEql");
let plus = document.getElementById("btnSum");
let minus = document.getElementById("btnSub");
let multiply = document.getElementById("btnMul");
let divide = document.getElementById("btnDiv");

let operator = "0";
let a;
let b;

zero.onclick=function(){
    result.innerHTML += "0";
}
one.onclick=function(){
    result.innerHTML += "1";
}
clear.onclick=function(){
    result.innerHTML = "";
    operator = "0";
    a = b = 0;
}
plus.onclick = function(){
    a = parseInt(result.innerHTML, 2)
    operator = '+';
    result.innerHTML += operator;
}
minus.onclick = function(){
    a = parseInt(result.innerHTML, 2)
    operator= '-' ;
    result.innerHTML += operator;
}
multiply.onclick = function(){
    a = parseInt(result.innerHTML, 2)
    operator= '*' ;
    result.innerHTML += operator;
}
divide.onclick = function(){
    a = parseInt(result.innerHTML, 2)
    operator= '/' ;
    result.innerHTML += operator;
}
function calculate(p, q, op){
    let rs = 0;
    switch(op){
        case '+':
            rs =  p + q;
            break;
        case '-':
            rs =  p - q;
            break;
        case '*':
            rs =  p * q;
            break;
        case '/':
            rs = p / q;
            break;
        default:
            alert("Enter valid number");
    }
    rs = parseInt(rs, 10).toString(2);
    return rs;
}
eql.onclick = function(){
    let regex = /\d*$/
    b = (result.innerHTML).match(regex);
    b = parseInt(b, 2);
    result.innerHTML = calculate(a, b, operator);
}