function Searcher() {
    var search = document.getElementById("search").value;
    var search = "=" + search;
    if (search == "Rob"){
        window.location.href = "Rob/index.html";
    }else if (search == "wordbeater") {
        window.location.href = "Wordbeater/index.html"
    }else if (search == "WolfG"){
        window.location.href = "https://showme-gh-pages.github.io/wolf3d/"
    }else if (search == "CFE"){
        window.location.href = "computer.html"
    }else if (search == "OS"){
        window.location.href = "DoorOS.html"
    }else if (search == "Lamp"){
        window.location.href = "Lamp/index.html"
    }else if (search == "Dice"){
        window.location.href = "Dice/index.html"
    }else if (search == "CFE2"){
        window.location.href = "Computer2.html"
    }else if (search == "GL"){
        window.location.href = "GameLess.html"
    }else if (search == "Shelly"){
        window.location.href = "Shelly/index.html"
    }else if (search == "RPS"){
        window.location.href = "RPS/index.html"
    }else if (search == "Menu"){
        window.location.href = "Menu/index.html"
    }else if (search == "Registery"){
        window.location.href = "Registery/index.html"
    }else if (search == "Animal"){
        window.location.href = "https://www.google.com/search?q=animal+sounds"
    }else if (search == "About"){
        window.location.href = "about/index.html"
    }else if (search == "WhoUs"){
        window.location.href = "Who Us/index.html"
    }else if (search == "Coffee" && "coffee"){
        window.location.href = "Search/Coffee.html"
    }else if (search == "Emoji"){
        window.location.href = "Search/Emoji/Emoji.html"
    }else if (search == "Emoji"){
        window.location.href = "Search/Emoji/Emoji.html"
    }else if (search == "Pay"){
        window.location.href = "Pay/index.html"
    }if (search == "COVID"){
        window.location.href = "Covid-19/main.html"
    }else{
    window.location.href = "https://www.google.com.sa/search?q=" + search;
    }
 }

window.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(e) {
   if (e.keyCode == "13") {
       Searcher()
   }
}
