document.getElementById("hamburger").onclick = function click() {
    var hamburger = document.getElementById("hamburger");
    var clicked = hamburger.getAttribute("clicked");
    var iconBars = document.querySelectorAll(".icon-bar");
    var navBar = document.querySelector(".navbar");

    if (clicked === "false") {
        hamburger.setAttribute("clicked", "true");
        for (var i = 0; i < iconBars.length; i++) {
            iconBars[i].style.backgroundColor = '#fff';
        }
        navBar.style.background = "rgba(0,0,0,0.25)"
    } else {
        hamburger.setAttribute("clicked", "false");
        setTimeout(function(){
            for (var i = 0; i < iconBars.length; i++) {
                iconBars[i].style.backgroundColor = '#2c3e50';
            }
            navBar.style.background = "rgba(0,0,0,0)"
        }, 300);
    }
}


// Change hamburger color when menu collapsed
// var iconBars = document.querySelectorAll(".icon-bar");
 
// for (var i = 0; i < iconBars.length; i++) {
//     iconBars[i].style.backgroundColor = #fff;
// }