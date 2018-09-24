window.addEventListener('load', init);
//Levels
const Levels = {
    easy: 5,
    medium: 3,
    hard: 1
};
var currentLevel = Levels.easy;
//Globals
let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//Words
const words = [
    'Youtube',
    'yahoo',
    'Dell',
    'Lenovo',
    'Plus',
    'premium',
    'master',
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'game',
    'lego',
    'grass',
    'car',
    'track',
    'eygpt',
    'canada',
    'russia',
    'china',
    'france',
    'mam',
    'dad',
    'sister',
    'brother',
    'desinger',
    'break',
    'september',
    'october',
    'november',
    'sunday',
    'monday',
    'plane',
    'boat',
    'boss',
    'techer',
    'student',
    'wifi',
    'lan',
    'battery',
    'lamp',
    'lights',
    'oven',
    'zero',
    'flash',
    'exit',
    'come in',
    'camera',
    'shift',
    'draw',
    'people',
    'mouse',
    'keyboard',
    'tree',
    'police',
    'english',
    'saudi arabia',
    'cake',
    'house',
    'homework',
    'technolgy',
    'keys',
    'more',
    'bubbles',
    'quit',
    'html',
    'door',
    'orange',
    'laptop',
    'stop',
    'banana',
    'lion',
    'grap',
    'both',
    'room',
    'car',
    'sponge',
    'sink',
    'televison',
    'phone',
    'water',
    'juice',
    'mini',
    'remote',
    'runaway',
    'oreo',
    'joke',
    'color',
    'level',
    'red',
    'yellow',
    'blue'
]

// init game
function init(){
    //show number of seconds in Ui
    seconds.innerHTML = currentLevel;
    //Load word from array
    showWord(words);
    //start matching on word input
    wordInput.addEventListener('input', startMatch)
    //Call countdown every secouds
    setInterval(countdown, 1000);
    //check game status
    setInterval(checkStatus, 50)
}

//start match
function startMatch(){
    if(matchword()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    //if score is -1 display 0
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }else {
    scoreDisplay.innerHTML = score;
    }
}
//match current word to word input
function matchword(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'correct!!!';
        return true;
    }else {
        message.innerHTML = '';
        return false;
    }
}
//Pick & show random word
function showWord(words){
    //generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //output random word
    currentWord.innerHTML = words[randIndex];
}
//Countdown timer
function countdown(){
    //Make sure time is not run out
    if(time > 0){
        //decrement
        time--;
    }else if(time == 0){
        //game is over
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time;
}

//check game status 
function checkStatus() {
    if(!isPlaying && time === 0){
        message.innerHTML = 'GameOver!!!'
        score = -1;
    }
}
