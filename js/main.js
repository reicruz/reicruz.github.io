/**
* @author Reinaldo Cruz
* Scrips for loading menu and smooth scrolling
**/

$(document).ready(function() {
    // Onclick listener to change colors on navigation menu
    function hamburgerClick() {
        var hamburger = document.getElementById("hamburger");
        var clicked = hamburger.getAttribute("clicked");
        var iconBars = document.querySelectorAll(".icon-bar");
        var navBar = document.querySelector(".navbar");

        if (clicked === "false") {
            hamburger.setAttribute("clicked", "true");
            for (var i = 0; i < iconBars.length; i++) {
                iconBars[i].style.backgroundColor = '#fff';
            }
            navBar.style.background = "rgba(0,0,0,0.5)"
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

    // Collapse menu when link is clicked
    function hamburgerCollapse() {
        $('.collapse').collapse('hide')
        hamburgerClick()
    }

    document.getElementById("hamburger").onclick = hamburgerClick;
    document.getElementById("nav-jumps").onclick = hamburgerCollapse;

    // Smooth scrolling for links
    $('#nav-jumps').localScroll({duration:800});
    $('#arrow-up-jump').localScroll({duration:1000});
});
