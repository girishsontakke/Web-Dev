var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var ls = document.querySelectorAll("ul li");

function addToListAfterKeypress(event){
    if ((input.value.length>0 && event.which===13)){
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
}

function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function addToListAfterClick(){
    if (input.value.length>0){
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
}

button.addEventListener("click", addToListAfterClick);
input.addEventListener("keypress", addToListAfterKeypress);
ul.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done")
    }
})

