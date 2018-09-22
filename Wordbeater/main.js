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
    'united state',
    'united kindom',
    'eygpt',
    'canada',
    'russia',
    'china',
    'france',
    'iran',
    'justine biber',
    'bill gates',
    'mam',
    'dad',
    'sister',
    'brother',
    'github',
    'desinger',
    'kitkat',
    'break',
    'what f',
    'september',
    'october',
    'november',
    'friday',
    'joli chic',
    'java',
    'c programing',
    'objactive-c',
    'ruby',
    'sunday',
    'monday',
    '9/11',
    'plane',
    'boat',
    'enderman',
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
    'spiderman',
    'batman',
    'superman',
    'donald trump',
    'wonder wonman',
    'flash',
    'fortnite',
    'gta',
    'angry birds',
    'skype',
    'facebook',
    'snapchat',
    'instagram',
    'twitter',
    'whatsapp',
    'telegram',
    'exit',
    'come in',
    'minecraft',
    'walk in dead',
    'floss dance',
    'reaven',
    'tilted towers',
    'flowers',
    'epic games',
    'playstation',
    'xbox',
    'van der sar',
    'cuphead',
    'dybala',
    'aguero',
    'camera',
    'shift',
    'draw',
    'people',
    'mouse',
    'keyboard',
    'javascript',
    'css',
    'tree',
    'police',
    'english',
    'messi',
    'football',
    'cr7',
    'apple',
    'samsung',
    'microsoft',
    'huawei',
    'oppo',
    'oneplus',
    'code',
    'developer',
    'wwdc',
    'mwdc',
    'iphone',
    'macbook',
    'steve jobs',
    'google',
    'saudi arabia',
    'cake',
    'house',
    'company',
    'iphone',
    'c++',
    'dell',
    'hp',
    'python',
    'perl',
    'swift',
    'tv',
    'homework',
    'ipad',
    'ipod',
    'technolgy',
    'keys',
    'more',
    'bubbles',
    'quit',
    'html',
    'door',
    'OS',
    'operating system',
    'banana',
    'orange',
    'laptop',
    'stop',
    'android',
    'ios',
    'windows',
    'mac os',
    'linux',
    'runaway',
    'firefox',
    'safari',
    'oreo',
    'joke',
    'color',
    'cooktail',
    'level',
    'fifa'
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
