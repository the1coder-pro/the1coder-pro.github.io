//Variables
version = 2.0;
codename = "SparkleStar";
name = "Rob";
by = 'Gray.inc';
child = "Remindero";

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

//Make Rob Speech & Listen
function SayHello(Answer){
    var answers = ["Yes", "No", "i don't know", "Of Coruse not", "Say Again"];

    let speech = new p5.Speech();
    speech.speak('Hello');
    
    //Speech Recognition
    let SpeechRec = new p5.SpeechRec('en-US', gotSpeech);
    SpeechRec.start(true, false);

    //Check For The Words
    if(SpeechRec.resultValue){
        let input = SpeechRec.resultString;
        console.log(input)
    }

    function gotSpeech(){
        var place = document.getElementById("place");
        randomWords(answers);
        speech.speak(place.innerHTML)
    }
}

//Check what button is pressed
window.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(e) {
   if (e.keyCode == "83") {
       randomWords(answers)
   }else if (e.keyCode == "88"){
        alert("Settings \nVersion : 2.0 \nCodeName : " + codename)
   }
}

//Ask Function for More Fun
function Ask(Questine){
    var ROB = document.getElementById('Rob')
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
