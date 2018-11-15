//Result Variable
let Result;
let Choice;
let BotPlace;
let WhoWin;

//Rock function
function Rock(){
    WhoWin = document.getElementById('WhoWin');
    Result = document.getElementById('Result');
    Result.innerHTML = "Rock";
    var Rock = 1;
    Choice = Rock;
    WhoWin.innerHTML = "";
    BotPlace = document.getElementById('BotPlace').innerHTML = "";
}

//Paper function
function Paper(){
    WhoWin = document.getElementById('WhoWin');
    Result = document.getElementById('Result');
    Result.innerHTML = "Paper";
    var Paper = 2;
    Choice = Paper;
    WhoWin.innerHTML = "";
    BotPlace = document.getElementById('BotPlace').innerHTML = "";
}

//Scissor function
function Scissor(){
    WhoWin = document.getElementById('WhoWin');
    Result = document.getElementById('Result');
    Result.innerHTML = "Scissor";
    var Scissor = 3;
    Choice = Scissor
    WhoWin.innerHTML = "";
    BotPlace = document.getElementById('BotPlace').innerHTML = "";
}

function Check(){
    WhoWin = document.getElementById('WhoWin');
    var ChoiceBot = ["Rock", "Paper", "Scissor"]
    var RandomChoice = ChoiceBot[Math.floor(Math.random() * ChoiceBot.length)];
    BotPlace = document.getElementById('BotPlace').innerHTML = RandomChoice;
    if (BotPlace == "Rock" && Choice == 1){
        console.log("Draw")
        WhoWin.innerHTML = "Draw";
    }else if (BotPlace == "Paper" && Choice == 2){
        console.log("Draw")
        WhoWin.innerHTML = "Draw";
    }else if (BotPlace == "Scissor" && Choice == 3){
        console.log("Draw")
        WhoWin.innerHTML = "Draw";
    }else if (BotPlace == "Rock" && Choice == 2){
        console.log("You Win")
        WhoWin.innerHTML = "You Win";
    }else if (BotPlace == "Rock" && Choice == 3){
        console.log("You Lose")
        WhoWin.innerHTML = "You Lose";
    }else if (BotPlace == "Paper" && Choice == 1){
        console.log("You Lose")
        WhoWin.innerHTML = "You Lose";
    }else if (BotPlace == "Paper" && Choice == 3){
        console.log("You Win");
        WhoWin.innerHTML = "You Win";
    }else if (BotPlace == "Scissor" && Choice == 1){
        console.log("You Win")
        WhoWin.innerHTML = "You Win";
    }else if (BotPlace == "Scissor" && Choice == 2){
        console.log("You Lose")
        WhoWin.innerHTML = "You Lose";
    }
}
