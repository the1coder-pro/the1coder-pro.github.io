function Roll(number){
    document.getElementById('Dice_number').innerHTML = Math.floor(Math.random() * number) + 1;
}