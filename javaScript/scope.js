var fun = 5;

function funFunction(){
    //child scope
    var fun = "hello";
    console.log(fun);
}

function funerFunction(){
    //child scope
    var fun = "Bye";
    console.log(fun);
}

function funestFunction(){
    //child scope
    fun = "Ok";
    console.log(fun);
}
console.log(fun);
funFunction();
funerFunction();
funestFunction();

console.log(fun);