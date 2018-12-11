//Variables
version = '1.2';
codename = 'Flowers';
name = "Rob";
from, by = 'Gray.inc';

//Check Function about who use Rob
function check(){
var password = prompt("enter the Password Please")
if (password == "devmut"){
    confirm("You'r my Father, it's You ?")
}else {
    alert("Welcome to Rob")
    }
}

//Variables Answers, Words.
var answers = ["Yes", "No", "i don't know", "Of Coruse not", "Say Again"];
var words = ["Sorry", "I love You", "i'm the Smartest", "Your Are the Boss"]

//Random function
function randomWords(something){
    var randomtext = Math.floor(Math.random() * something.length);
    document.getElementById("place").innerHTML = something[randomtext];
}

//Check what button is pressed
window.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(e) {
   if (e.keyCode == "83") {
       randomWords(answers)
   }else if (e.keyCode == "17" + "27"){
        alert("Settings \nVersion : 1.2 \nCodeName : KeyBoard")
   }
}

//Ask Function for More Fun
function Ask(Questine){
    if (Questine == "hi"){
        randomWords(answers)
    }else if (Questine == "change"){
        document.getElementById('Rob').src="Robgray.png";
    }else if (Questine == "default"){
        document.getElementById('Rob').src="Robpixel.png"
    else {
        console.log("sorry");
        }
    }




