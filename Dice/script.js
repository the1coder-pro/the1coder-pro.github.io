function Roll(number){
    document.getElementById('Dice_number').innerHTML = Math.floor(Math.random() * number) + 1;
}

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
   if (e.keyCode == "82") {
       Roll(6)
   }
}
