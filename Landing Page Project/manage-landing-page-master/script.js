
var list = document.querySelector(".nav-list");

function go(){
 
    if (list.className === "nav-list") {
    list.className += " responsive";
    /*change topnav to topnav.responsive*/
    } else {
    list.className = "nav-list";
}
}

