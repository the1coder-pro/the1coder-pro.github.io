function Searcher() {
    var search = document.getElementById("search").value;
    if (search == "Rob"){
        window.location.href = "Rob/index.html";
    }else if (search == "wordbeater") {
        window.location.href = "Wordbeater/index.html"
    }else if (search == "WolfG"){
        window.location.href = "https://showme-gh-pages.github.io/wolf3d/"
    }else if (search == "CFE" && "Computer"){
        window.location.href = "computer.html"
    }else if (search == "OS"){
        window.location.href = "DoorOS.html"
    }
 }

window.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(e) {
   if (e.keyCode == "13") {
       Searcher()
   }
}
