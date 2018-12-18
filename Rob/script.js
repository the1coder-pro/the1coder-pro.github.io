//Variables
version = '1.2';
codename = 'Flowers';
name = "Rob";
by = 'Gray.inc';
var ROB = document.getElementById('Rob')

//Check Function about who use Rob
function check(){
var password = prompt("enter the Password Please")
if (password == "devmut"){
    if (confirm("You'r my Father, it's You ?") == true){
    console.log("Yes, Your Are my Father !")
}
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
   }else if (e.keyCode == "17" + "88"){
        alert("Settings \nVersion : 1.2 \nCodeName : KeyBoard")
   }
}

//Ask Function for More Fun
function Ask(Questine){
    if (Questine == "hi"){
        randomWords(answers)
    }else if (Questine == "walle"){
        ROB.src = 'Wall-E.png';
    }else if (Questine == "default"){
        ROB.src="Robpixel.png";
    }else if (Questine == "Modern" || "New"){
        ROB.src = "Rob.png";
    }else if (Questine == "R2D2"){
        ROB.src = "R2D2.png";
    }else {
        console.log("sorry");
        }
    }




