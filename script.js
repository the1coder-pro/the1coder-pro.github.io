function Searcher() {
    var search = document.getElementById("search").value;
    if (search == "Rob"){
        window.location.href = "Rob/index.html";
    }else if (search == "wordbeater") {
        window.location.href = "Wordbeater/index.html"
    }
 }

window.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(e) {
   if (e.keyCode == "13") {
       Searcher()
   }
}