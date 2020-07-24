var database = [
    {
        username: "Girish",
        password: "supersecret"
    },
    {
        username: "Tejas",
        password: "123"
    },
    {
        username: "Mahendra",
        password: "777"
    },
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning"
    },
    {
        username:"Sally",
        timeline:"Javascript is so cool"
    }
]

function signIn(){    
    while(true){
        var user = prompt("what is your username?");
        var pass = prompt("what is your password?");

        count = 0;
        for (var i=0; i<database.length; i++){
            if(user===database[i].username && pass===database[i].password){
                console.log(newsFeed);
                count = 1;
                break;
            }
        }
        if(count===0){
            alert("Sorry! wrong credentials are entered")
        }
        else{
            break;
        }
    }
};

signIn()